import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import type { Product } from '../types/productType'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Transform a product from the OpenFoodFacts API to a product in the database
 * @param product - The product from the OpenFoodFacts API (type Product)
 * @param expiration_date - The expiration date of the product (ISO string)
 * @param status - The status of the product ("fresh", "close to expiration", "expired")
 * @param quantity - The quantity of the product (number)
 * @param location - The location of the product ("fridge", "freezer", "pantry", "other")
 * @param created_by - The user who created the product (name)
 * @param updated_by - The user who updated the product (name)
 * @param created_at - The date the product was created (ISO string)
 * @param updated_at - The date the product was updated (ISO string)
 * @returns The product in the database format
 */
export function transformProductToDbProduct(
  product: Product,
  expiration_date: string,
  status: string,
  quantity: number,
  location: string,
  created_by: string,
  updated_by: string,
  created_at: string,
  updated_at: string
) {
  return {
    name: product.product_name || '',
    brand: product.brands || '',
    expiration_date: expiration_date,
    status: status,
    quantity: quantity,
    ingredients: product.ingredients_text || '',
    keywords: product._keywords?.join(',') || '',
    traces_tags: product.traces_tags?.join(',') || '',
    location: location,
    barcode: product.code || '',
    image_front_small_url: product.image_front_small_url || '',
    image_front_thumb_url: product.image_front_thumb_url || '',
    image_front_url: product.image_front_url || '',
    created_by: created_by,
    updated_by: updated_by,
    created_at: created_at,
    updated_at: updated_at,
  }
}
