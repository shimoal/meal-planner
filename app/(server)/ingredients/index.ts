import { db } from '@/db/database'
import { NewIngredient } from '@/db/types'
import { jsonArrayFrom } from 'kysely/helpers/postgres'

export async function addIngredients(ingredients: NewIngredient[]) {
  const query = db.insertInto('ingredients')

  const result = await query.values(ingredients).returningAll().execute()

  return result
}

export async function getIngredientsForMeal(mealId: number) {
  const query = db.selectFrom('ingredients')

  const result = await query
    .where('meal_id', '=', mealId)
    .selectAll('ingredients')
    .select((eb) => [
      jsonArrayFrom(
        eb
          .selectFrom('foods')
          .selectAll('foods')
          .whereRef('ingredients.food_id', '=', 'foods.id')
      ).as('food'),
    ])
    .execute()

  return result
}
