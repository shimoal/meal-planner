import { getMeal } from '@/app/(server)/meals'
import PageContainer from '@/components/PageContainer'
import AddIngredients from './AddIngredients/AddIngredients'
import { getFoods } from '@/app/(server)/foods'
import { NewIngredient } from '@/db/types'
import {
  addIngredients,
  getIngredientsForMeal,
} from '@/app/(server)/ingredients'

const Page = async ({ params }: { params: { mealId: string } }) => {
  const meal = await getMeal(Number(params.mealId))
  const foods = await getFoods({})
  const ingredients = await getIngredientsForMeal(meal.id)

  const updateIngredients = async (ingredients: NewIngredient[]) => {
    'use server'
    return await addIngredients(ingredients)
  }

  return (
    <PageContainer>
      <h1 className="text-3xl font-bold mb-4">
        Edit Meal #{params.mealId}, {meal.name}
      </h1>
      <div>
        <p>Type: {meal.meal_type}</p>
        {ingredients && (
          <>
            <p>Ingredients:</p>
            <div>
              {ingredients.map((ingredient) => {
                return (
                  <div>
                    {ingredient.food[0].name}: {ingredient.label_qty}{' '}
                    {ingredient.label}
                  </div>
                )
              })}
            </div>
          </>
        )}
      </div>
      <AddIngredients
        foods={foods}
        mealId={meal.id}
        handleSaveIngredients={updateIngredients}
      />
    </PageContainer>
  )
}

export default Page
