import { create } from 'zustand'
import { Product } from '@prisma/client'

// Use a simplified Product type for the Cart
export type CartProduct = Pick<Product, 'id' | 'name' | 'pricePublic' | 'priceDistributor' | 'unitType'>
export type CartItem = CartProduct & { quantity: number; subtotal: number }

interface CartState {
    items: CartItem[]
    isDistributorMode: boolean
    addItem: (product: CartProduct) => void
    removeItem: (productId: string) => void
    updateQuantity: (productId: string, quantity: number) => void
    clearCart: () => void
    setDistributorMode: (active: boolean) => void
    getTotal: (discountSettings?: { active: boolean, threshold: number, percentage: number }) => number
}

export const useCartStore = create<CartState>((set, get) => ({
    items: [],
    isDistributorMode: false,
    addItem: (product) => {
        set((state) => {
            const price = state.isDistributorMode ? Number(product.priceDistributor) : Number(product.pricePublic)
            const existingItem = state.items.find(item => item.id === product.id)
            if (existingItem) {
                return {
                    items: state.items.map(item =>
                        item.id === product.id
                            ? {
                                ...item,
                                quantity: item.quantity + 1,
                                subtotal: price * (item.quantity + 1)
                            }
                            : item
                    )
                }
            }
            return {
                items: [...state.items, { ...product, quantity: 1, subtotal: price }]
            }
        })
    },
    removeItem: (productId) => {
        set((state) => ({
            items: state.items.filter(item => item.id !== productId)
        }))
    },
    updateQuantity: (productId, quantity) => {
        set((state) => {
            const item = state.items.find(i => i.id === productId)
            if (!item) return state
            const price = state.isDistributorMode ? Number(item.priceDistributor) : Number(item.pricePublic)
            return {
                items: state.items.map(i =>
                    i.id === productId
                        ? { ...i, quantity, subtotal: price * quantity }
                        : i
                )
            }
        })
    },
    clearCart: () => set({ items: [], isDistributorMode: false }),
    setDistributorMode: (active) => {
        set((state) => ({
            isDistributorMode: active,
            items: state.items.map(item => {
                const price = active ? Number(item.priceDistributor) : Number(item.pricePublic)
                return { ...item, subtotal: price * item.quantity }
            })
        }))
    },
    getTotal: (discountSettings?: { active: boolean, threshold: number, percentage: number }) => {
        const state = get()
        const total = state.items.reduce((total, item) => total + item.subtotal, 0)

        // Volume discount only applies in PUBLIC mode (not distributor mode usually, or depends on business)
        // Let's assume it only applies if NOT in distributor mode for now, or keep it as is.
        if (discountSettings?.active && !state.isDistributorMode) {
            const kgQuantity = state.items
                .filter(item => item.unitType?.toLowerCase().includes('kg'))
                .reduce((q, item) => q + item.quantity, 0)

            if (kgQuantity >= discountSettings.threshold) {
                return total * (1 - (discountSettings.percentage / 100))
            }
        }

        return total
    }
}))
