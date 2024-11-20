import { Food } from '@/db/types'

export async function getFoodList(): Promise<Food[]> {
  const response = await fetch('/api/foods')

  if (!response.ok) {
    throw new Error('Something went wrong')
  }

  return response.json()
}

export async function deleteFoodItem(foodId: string): Promise<void> {
  const response = await fetch(`/api/foods?id=${foodId}`, { method: 'DELETE' })

  if (!response.ok) {
    throw new Error('Something went wrong')
  }

  return response.json()
}
