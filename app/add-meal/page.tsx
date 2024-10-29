import PageContainer from '@/components/PageContainer'
import { MealType } from '@/db/types'
import AddMealForm from './AddMealForm'
import { addMeal } from '../(server)/meals'

const Page = async () => {
  const addMealToDB = async ({
    name,
    mealType,
  }: {
    name: string
    mealType: MealType
  }) => {
    'use server'
    return await addMeal({ name, mealType })
  }

  return (
    <PageContainer>
      <h1 className="text-3xl font-bold mb-4">Add Meal</h1>
      <AddMealForm addMeal={addMealToDB} />
    </PageContainer>
  )
}

export default Page
