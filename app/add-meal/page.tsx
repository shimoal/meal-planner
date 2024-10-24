import PageContainer from '@/components/PageContainer'
import { Meal } from '@/db/types'
import AddMealForm from './AddMealForm'

const Page = async () => {
  const addMealToDB = async (meal: Meal) => {
    'use server'
    // add meal here
    return []
  }

  return (
    <PageContainer>
      <h1 className="text-3xl font-bold mb-4">Add Meal</h1>
      <AddMealForm addMeal={addMealToDB} />
    </PageContainer>
  )
}

export default Page
