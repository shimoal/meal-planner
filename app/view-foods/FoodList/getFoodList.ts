import { Food } from '@/db/types'
import { PaginatedFood } from '@/types/paginatedTypes'

export async function getFoodList(): Promise<Food[]> {
  const response = await fetch('/api/foods')

  if (!response.ok) {
    throw new Error('Something went wrong')
  }

  return response.json()
}

export async function getPaginatedFoodList({
  pageParam,
}: {
  pageParam: number
}): Promise<PaginatedFood> {
  const response = await fetch(`/api/foods?cursor=${pageParam}`)

  if (!response.ok) {
    throw new Error('Something went wrong')
  }

  return response.json()
}

export async function deleteFoodItem(foodId: number): Promise<string> {
  const response = await fetch(`/api/foods?id=${foodId}`, { method: 'DELETE' })

  if (!response.ok) {
    throw new Error('Something went wrong')
  }

  return response.json()
}
