import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { AlertCircle } from 'lucide-react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { ManualProduct } from '@/types/interfaces'

interface Props {
  product: ManualProduct
  onUpdate: (id: string, data: Partial<ManualProduct>) => void
  onRemove: (id: string) => void
}

export default function ManualProductCard({
  product,
  onUpdate,
  onRemove,
}: Props) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onUpdate(product.id, {
      [e.target.name]: e.target.value,
    })
  }

  return (
    <Card className="w-full">
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
            <Label htmlFor="product_name">Product Name</Label>
            <Input
              id="product_name"
              name="product_name"
              placeholder="Product Name"
              value={product.product_name}
              onChange={handleChange}
              className="mb-2"
            />
            <Label htmlFor="brand">Brand</Label>
            <Input
              id="brand"
              name="brand"
              placeholder="Brand"
              value={product.brand}
              onChange={handleChange}
              className="mb-2"
            />
            <Label htmlFor="quantity">Quantity</Label>
            <Input
              id="quantity"
              name="quantity"
              placeholder="Number of products"
              value={product.quantity}
              onChange={handleChange}
            />
          </div>
        </div>
        <Button
          variant="destructive"
          className="w-full"
          onClick={() => onRemove(product.id)}
        >
          Remove
        </Button>
      </CardContent>
    </Card>
  )
}
