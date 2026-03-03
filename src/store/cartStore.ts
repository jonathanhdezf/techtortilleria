import { create } from 'zustand'
import { Product } from '@prisma/client'

// Use a simplified Product type for the Cart
export type CartProduct = Pick<Product, 'id' | 'name' | 'pricePublic' | 'unitType'>
export type CartItem = CartProduct & { quantity: number; subtotal: number }

interface CartState {
    items: CartItem[]
    addItem: (product: CartProduct) => void
    removeItem: (productId: string) => void
    updateQuantity: (productId: string, quantity: number) => void
    clearCart: () => void
    getTotal: () => number
}

export const useCartStore = create<CartState>((set, get) => ({
    items: [],
    addItem: (product) => {
        set((state) => {
            const existingItem = state.items.find(item => item.id === product.id)
            if (existingItem) {
                return {
                    items: state.items.map(item =>
                        item.id === product.id
                            ? {
                                ...item,
                                quantity: item.quantity + 1,
                                subtotal: Number(item.pricePublic) * (item.quantity + 1)
                            }
                            : item
                    )
                }
            }
            return {
                items: [...state.items, { ...product, quantity: 1, subtotal: Number(product.pricePublic) }]
            }
        })
    },
    removeItem: (productId) => {
        set((state) => ({
            items: state.items.filter(item => item.id !== productId)
        }))
    },
    updateQuantity: (productId, quantity) => {
        set((state) => ({
            items: state.items.map(item =>
                item.id === productId
                    ? { ...item, quantity, subtotal: Number(item.pricePublic) * quantity }
                    : item
            )
        }))
    },
    clearCart: () => set({ items: [] }),
    getTotal: () => {
        return get().items.reduce((total, item) => total + item.subtotal, 0)
    }
}))
