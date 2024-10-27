export type DatabaseType = DatabaseProduct[]

export interface DatabaseProduct {
  id: number
  created_at: string
  updated_at: string
  name: string
  brand: string
  expiration_date: string
  status: string
  quantity: number
  ingredients: string
  keywords: string
  traces_tags: string
  location: string
  barcode: string
  image_front_small_url: string
  image_front_thumb_url: string
  image_front_url: string
  created_by: string
  updated_by: string
}
