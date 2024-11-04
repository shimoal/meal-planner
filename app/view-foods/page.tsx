import PageContainer from '@/components/PageContainer'
import { deleteFoods, getFoods } from '../(server)/foods'
import SelectAndDeleteList from '@/components/SelectAndDeleteList/SelectAndDeleteList'
import FoodCard from './FoodCard'

const Page = async () => {
  const foods = (await getFoods()) || []

  const handleDeleteFoods = async (foodIds: number[]) => {
    'use server'
    await deleteFoods(foodIds)
  }

  return (
    <PageContainer>
      <h1 className="text-3xl font-bold mb-4">View Foods</h1>
      <h2>Existing Foods:</h2>
      <SelectAndDeleteList
        handleDeleteItemIds={handleDeleteFoods}
        items={foods.map((food) => ({
          id: food.id,
          content: <FoodCard name={food.name} calories={food.calorie_count} />,
        }))}
      />
    </PageContainer>
  )
}

export default Page
