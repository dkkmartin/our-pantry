import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Product } from '@/types/productType'
import { CheckCircle2 } from 'lucide-react'
import { Button } from '../ui/button'

interface Props {
  product: Product & { scannedId: string }
  onRemove: (scannedId: string) => void
}

export default function ProductCard({ product, onRemove }: Props) {
  return (
    <Card className="w-full">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="h-5 w-5 text-green-500" />
          <span className="text-sm text-muted-foreground">Product found!</span>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="space-y-3">
          <div>
            <h3 className="text-xl font-semibold line-clamp-2">
              {product.product_name || '[No Name]'}
            </h3>
            <p className="text-sm text-muted-foreground">
              {product.brands || '[No Brand]'}
            </p>
          </div>
          {product.quantity && (
            <p className="text-sm text-muted-foreground">{product.quantity}</p>
          )}
        </div>

        <Button
          variant="destructive"
          className="w-full"
          onClick={() => onRemove(product.scannedId)}
        >
          Remove
        </Button>
      </CardContent>
    </Card>
  )
}
