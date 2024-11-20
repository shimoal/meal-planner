import { db } from '@/db/database'
import { Food } from '@/db/types'

export async function getFoods(): Promise<Food[]> {
  const query = db.selectFrom('foods')

  const result = await query.selectAll().execute()
  return result
}

export async function addFood({
  name,
  calorie_count,
}: {
  name: string
  calorie_count: number
}) {
  const query = db.insertInto('foods')

  const result = await query
    .values({ name, calorie_count })
    .returningAll()
    .execute()

  return result
}

export async function deleteFood(foodId: number) {
  const query = db.deleteFrom('foods')

  const result = await query.where('id', '=', foodId).execute()

  return result
}

export async function deleteFoods(foodIds: number[]) {
  const query = db.deleteFrom('foods')

  const result = await query.where('id', 'in', foodIds).execute()

  return result
}
