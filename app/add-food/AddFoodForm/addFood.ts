import { Food } from '@/db/types'

export async function addFood(food: Partial<Food>): Promise<void> {
  const response = await fetch(`/api/foods`, {
    method: 'POST',
    body: JSON.stringify(food),
  })

  if (!response.ok) {
    throw new Error('Something went wrong')
  }

  return response.json()
}
