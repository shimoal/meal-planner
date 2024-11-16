import { db } from '@/db/database'
import { NewIngredient } from '@/db/types'

export async function addIngredients(ingredients: NewIngredient[]) {
  const query = db.insertInto('ingredients')

  const result = await query.values(ingredients).returningAll().execute()

  return result
}
