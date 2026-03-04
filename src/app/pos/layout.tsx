import { ReactNode } from 'react'

export default function POSLayout({ children }: { children: ReactNode }) {
    return (
        <div className="min-h-screen bg-neutral-black flex flex-col noise">
            {/* Main Content Area */}
            <main className="flex-1 flex overflow-hidden">
                {children}
            </main>
        </div>
    )
}
