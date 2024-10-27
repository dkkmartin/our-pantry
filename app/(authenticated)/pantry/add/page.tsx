'use client'

import { getProductInfo } from '@/app/actions'
import ManualProductCard from '@/components/product/manualProductCard'
import ProductCard from '@/components/product/productCard'
import Scanner from '@/components/scanner/scanner'
import { Button } from '@/components/ui/button'
import { Product } from '@/types/productType'
import { useEffect, useState } from 'react'

export default function AddProduct() {
  const [products, setProducts] = useState<Product[]>([])
  const [manualProducts, setManualProducts] = useState<Product[]>([])
  const [code, setCode] = useState<string>('')

  useEffect(() => {
    if (!code) return
    getProductInfo(code).then((response) => {
      if (response.success) {
        setProducts((prev) => [...prev, response.data.product])
      } else {
        setManualProducts((prev) => [...prev, {} as Product])
      }
    })
  }, [code])

  return (
    <section
      className={`flex flex-col ${
        products.length === 0 ? 'items-center justify-center' : 'justify-start'
      } flex-1`}
    >
      <div className="fixed bottom-4 right-4 z-10">
        <Scanner onCodeScanned={setCode} />
      </div>

      <div
        className={`${
          products.length === 0 ? 'flex flex-col' : 'flex flex-wrap'
        } gap-4`}
      >
        {products.map((product) => (
          <ProductCard product={product} key={product.code} />
        ))}
        {manualProducts.map((_, key) => (
          <ManualProductCard key={key} />
        ))}
      </div>

      {products.length === 0 ? (
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
