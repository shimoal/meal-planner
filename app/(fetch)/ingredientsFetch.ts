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
