import { getMeal } from '@/app/(server)/meals'
import PageContainer from '@/components/PageContainer'
import AddIngredients from './AddIngredients/AddIngredients'
import { getFoods } from '@/app/(server)/foods'

const Page = async ({ params }: { params: { mealId: string } }) => {
  const meal = await getMeal(Number(params.mealId))
  const foods = await getFoods({})

  return (
    <PageContainer>
      <h1 className="text-3xl font-bold mb-4">
        Edit Meal #{params.mealId}, {meal.name}
      </h1>
      <div>
        <p>Type: {meal.meal_type}</p>
      </div>
      <AddIngredients foods={foods} mealId={meal.id} />
    </PageContainer>
  )
}

export default Page
