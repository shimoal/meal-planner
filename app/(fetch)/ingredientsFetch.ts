import { NewIngredient } from '@/db/types'
import { IngredientWithFood } from '@/types/withRelations'

export async function getIngredients(
  mealId: number
): Promise<IngredientWithFood[]> {
  const response = await fetch(`/api/ingredients?mealId=${mealId}`)

  if (!response.ok) {
    throw new Error('Something went wrong')
  }

  return response.json()
}

export async function addIngredients(
  ingredients: Partial<NewIngredient[]>
): Promise<void> {
  const response = await fetch(`/api/ingredients`, {
    method: 'POST',
    body: JSON.stringify(ingredients),
  })

  if (!response.ok) {
    throw new Error('Something went wrong')
  }

  return response.json()
}
