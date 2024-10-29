import { db } from '@/db/database'
import { MealType } from '@/db/types'

export async function addMeal({
  name,
  mealType,
}: {
  name: string
  mealType: MealType
}) {
  const query = db.insertInto('meals')

  const result = await query
    .values({ name, meal_type: mealType })
    .returningAll()
    .execute()

  return result
}
