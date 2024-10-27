'use client'

import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()

  function getTitle() {
    // TODO: Add more routes as they are created
    switch (pathname) {
      case '/pantry/add':
        return 'Add Product'
      case '/pantry':
        return 'Pantry'
      default:
        return 'Pantry'
    }
  }

  return (
    <header className="flex items-center justify-between p-4 border-b h-16">
      <h1 className="text-2xl font-bold">{getTitle()}</h1>
      <Button variant="outline" size="icon">
        <Menu />
      </Button>
    </header>
  )
}
