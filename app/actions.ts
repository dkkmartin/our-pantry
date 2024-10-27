'use server'

export async function getProductInfo(barcode: string) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_OPENFOODFACTS_API_URL}${barcode}`
    )
    if (!response.ok) {
      console.error(
        'Error scanning barcode:',
        response.status,
        response.statusText
      )
      return { success: false, error: response.statusText }
    }
    const data = await response.json()
    return { success: true, data: data }
  } catch (error) {
    console.error('Error scanning barcode:', error)
    return { success: false, error: error }
  }
}
