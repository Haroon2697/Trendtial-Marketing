// components/ui/sheet.tsx

import React, { useState, createContext, useContext } from 'react'

interface SheetContextType {
  isOpen: boolean
  open: () => void
  close: () => void
}

const SheetContext = createContext<SheetContextType | undefined>(undefined)

export const Sheet: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const open = () => setIsOpen(true)
  const close = () => setIsOpen(false)

  return (
    <SheetContext.Provider value={{ isOpen, open, close }}>
      {children}
    </SheetContext.Provider>
  )
}

export const SheetTrigger: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const context = useContext(SheetContext)
  if (!context) throw new Error('SheetTrigger must be used within a Sheet')
  return <div onClick={context.open}>{children}</div>
}

interface SheetContentProps {
  children: React.ReactNode
  side?: 'left' | 'right'
  className?: string
}

export const SheetContent: React.FC<SheetContentProps> = ({ children, side = 'right', className }) => {
  const context = useContext(SheetContext)
  if (!context) throw new Error('SheetContent must be used within a Sheet')
  if (!context.isOpen) return null

  return (
    <div
      className={`fixed inset-y-0 ${side === 'right' ? 'right-0' : 'left-0'} w-64 bg-white p-6 shadow-lg ${className}`}
    >
      <button onClick={context.close} className="text-red-500 mb-4">
        Close
      </button>
      {children}
    </div>
  )
}

export const SheetHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="text-lg font-bold mb-2">{children}</div>
)

export const SheetTitle: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => <h1 className={`text-xl font-semibold ${className}`}>{children}</h1>
