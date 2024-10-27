import { integer, pgTable, text, date, timestamp } from 'drizzle-orm/pg-core'

export const productsTable = pgTable('products', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: text().notNull(),
  brand: text().notNull(),
  prices: integer().array(),
  expirationDate: date().notNull(),
  status: text().notNull().default('Fresh'),
  quantity: integer().notNull().default(1),
  ingredients: text().array(),
  keywords: text().array(),
  traces_tags: text().array(),
  location: text().notNull().default('Pantry'),
  barcode: text().notNull(),
  image_front_small_url: text(),
  image_front_thumb_url: text(),
  image_front_url: text(),
  created_by: text().notNull(),
  updated_by: text(),
  created_at: timestamp({ mode: 'string' }).notNull().defaultNow(),
  updated_at: timestamp({ mode: 'string' }),
})
