import { Card, CardContent, CardHeader } from '@/components/ui/card'

import { AlertCircle } from 'lucide-react'
import { Input } from '../ui/input'
import { useState } from 'react'
import { Button } from '../ui/button'

export default function ManualProductCard() {
  const [productData, setProductData] = useState({
    product_name: '',
    brand: '',
    quantity: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProductData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <Card className="min-w-[50vw]">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-2">
          <AlertCircle className="h-5 w-5 text-yellow-500" />
          <span className="text-sm text-muted-foreground">
            Product not found - Manual entry
          </span>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="space-y-3">
          <div>
            <Input
              name="product_name"
              placeholder="Product Name"
              value={productData.product_name}
              onChange={handleChange}
              className="mb-2"
            />
            <Input
              name="brands"
              placeholder="Brand"
              value={productData.brand}
              onChange={handleChange}
              className="mb-2"
            />
            <Input
              name="quantity"
              placeholder="Number of products"
              defaultValue={1}
              value={productData.quantity}
              onChange={handleChange}
            />
          </div>
        </div>
        <Button variant="destructive" className="w-full">
          Remove
        </Button>
      </CardContent>
    </Card>
  )
}
