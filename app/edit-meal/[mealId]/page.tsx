import { getMeal } from '@/app/(server)/meals'
import PageContainer from '@/components/PageContainer'
import AddIngredients from './AddIngredients/AddIngredients'
import { getFoods } from '@/app/(server)/foods'
import { NewIngredient } from '@/db/types'
import { addIngredients } from '@/app/(server)/ingredients'

const Page = async ({ params }: { params: { mealId: string } }) => {
  const meal = await getMeal(Number(params.mealId))
  const foods = await getFoods({})

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
