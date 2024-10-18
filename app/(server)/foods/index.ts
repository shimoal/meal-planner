import { db } from '@/db/database'
import { Food } from '@/db/types'

export async function getFoods(): Promise<Food[]> {
  let query = db.selectFrom('foods')

  const result = await query.selectAll().execute()
  return result
}

export async function addFood({
  name,
  calorieCount,
}: {
  name: string
  calorieCount: number
}) {
  let query = db.insertInto('foods')

  const result = await query
    .values({ name, calorie_count: calorieCount })
    .returningAll()
    .execute()

  return result
}
