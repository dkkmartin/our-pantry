'use client'

import { getProductInfo } from '@/app/actions'
import ManualProductCard from '@/components/product/manualProductCard'
import ProductCard from '@/components/product/productCard'
import Scanner from '@/components/scanner/scanner'
import { Button } from '@/components/ui/button'
import { Product } from '@/types/productType'
import { useEffect, useState } from 'react'
import { useLocalStorage } from '@uidotdev/usehooks'
import { v4 as uuidv4 } from 'uuid'
import { ManualProduct } from '@/types/interfaces'

type ScannedProduct = Product & { scannedId: string }

export default function AddProduct() {
  const [products, setProducts] = useLocalStorage<ScannedProduct[]>(
    'new_products_group',
    []
  )
  const [manualProducts, setManualProducts] = useLocalStorage<ManualProduct[]>(
    'new_manual_products_group',
    []
  )
  const [code, setCode] = useState<string>('')

  useEffect(() => {
    if (!code) return

    getProductInfo(code)
      .then((response) => {
        if (response.success && response.data?.product) {
          setProducts((prev) => [
            ...prev,
            {
              ...response.data.product,
              scannedId: uuidv4(),
            },
          ])
        } else {
          setManualProducts((prev) => [
            ...prev,
            {
              id: uuidv4(),
              product_name: '',
              brand: '',
              quantity: '1',
              barcode: code,
            },
          ])
        }
        setCode('')
      })
      .catch((error) => {
        console.error('Error fetching product:', error)
        setManualProducts((prev) => [
          ...prev,
          {
            id: uuidv4(),
            product_name: '',
            brand: '',
            quantity: '1',
            barcode: code,
          },
        ])
        setCode('')
      })
  }, [code, setManualProducts, setProducts])

  const handleManualUpdate = (id: string, data: Partial<ManualProduct>) => {
    setManualProducts((prev) =>
      prev.map((product) =>
        product.id === id ? { ...product, ...data } : product
      )
    )
  }

  const handleManualRemove = (id: string) => {
    setManualProducts((prev) => prev.filter((product) => product.id !== id))
  }

  const handleProductRemove = (scannedId: string) => {
    setProducts((prev) =>
      prev.filter((product) => product.scannedId !== scannedId)
    )
  }

  return (
    <section
      className={`flex flex-col ${
        products.length === 0 && manualProducts.length === 0
          ? 'items-center justify-center'
          : 'justify-start'
      } flex-1`}
    >
      <div className="fixed bottom-4 right-4 z-10">
        <Scanner onCodeScanned={setCode} />
      </div>

      {/* Changed from flex-wrap to flex-col */}
      <div className="flex flex-col gap-4 w-full max-w-md mx-auto">
        {products.map((product, index) => (
          <ProductCard
            product={product}
            key={index}
            onRemove={handleProductRemove}
          />
        ))}
        {manualProducts.map((product, index) => (
          <ManualProductCard
            key={index}
            product={product}
            onUpdate={handleManualUpdate}
            onRemove={handleManualRemove}
          />
        ))}
      </div>

      {products.length === 0 && manualProducts.length === 0 ? (
        <h2 className="text-lg font-medium mt-4">
          Go ahead and scan your product!
        </h2>
      ) : (
        <div className="flex flex-col items-center gap-2 mt-4">
          <h2 className="text-lg font-medium">Finished?</h2>
          <Button className="bg-green-400 hover:bg-green-500 transition-colors">
            Add all products
          </Button>
        </div>
      )}
    </section>
  )
}
