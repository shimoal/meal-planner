import PageContainer from '@/components/PageContainer'
import { deleteMeals, getMeals } from '../(server)/meals'
import SelectAndDeleteList from '@/components/SelectAndDeleteList/SelectAndDeleteList'
import MealCard from './MealCard'

const Page = async () => {
  const meals = (await getMeals()) || []

  const handleDeleteMeals = async (mealIds: number[]) => {
    'use server'
    await deleteMeals(mealIds)
  }

  return (
    <PageContainer>
      <h1 className="text-3xl font-bold mb-4">View Foods</h1>
      <h2>Existing Meals:</h2>
      <SelectAndDeleteList
        handleDeleteItemIds={handleDeleteMeals}
        items={meals.map((meal) => ({
          id: meal.id,
          content: <MealCard name={meal.name} />,
        }))}
      />
    </PageContainer>
  )
}

export default Page
