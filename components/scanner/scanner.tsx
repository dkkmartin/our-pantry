'use client'
import { useEffect, useState } from 'react'
import { Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from '@/components/ui/drawer'
import useScanner from '@/hooks/useScanner'

interface ScannerProps {
  onCodeScanned: (code: string) => void
}

export default function Scanner({ onCodeScanned }: ScannerProps) {
  const [isOpen, setIsOpen] = useState(false)

  const { scannerRef, startScanner, stopScanner, code } = useScanner(() => {
    stopScanner()
    setIsOpen(false)
  }, false)

  const handleStartScanning = () => {
    setIsOpen(true)
    setTimeout(() => {
      startScanner()
    }, 100)
  }

  const handleStopScanning = () => {
    stopScanner()
    setIsOpen(false)
  }

  useEffect(() => {
    if (code) {
      onCodeScanned(code)
    }
  }, [code, onCodeScanned])

  return (
    <>
      <Button onClick={handleStartScanning} size="icon" variant={'outline'}>
        <Plus size={30} />
      </Button>

      <Drawer open={isOpen} onOpenChange={handleStopScanning}>
        <DrawerContent
          ref={scannerRef}
          className="[&_video]:h-[400px] [&_canvas]:hidden"
        >
          <DrawerHeader className="relative">
            <DrawerTitle>Scan your product</DrawerTitle>
            <DrawerDescription>
              Point your camera at a barcode
            </DrawerDescription>
          </DrawerHeader>
          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}
