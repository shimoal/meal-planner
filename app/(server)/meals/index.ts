import { db } from '@/db/database'
import { Meal, MealType } from '@/db/types'

export async function getMeals(): Promise<Meal[]> {
  const query = db.selectFrom('meals')

  const result = await query.selectAll().execute()
  return result
}

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

export async function deleteMeals(mealIds: number[]) {
  const query = db.deleteFrom('meals')

  const result = await query.where('id', 'in', mealIds).execute()

  return result
}
