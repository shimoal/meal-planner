import PageContainer from '@/components/PageContainer'
import { deleteFoods, getFoods } from '../(server)/foods'
import FoodList from './FoodList'

const Page = async () => {
  const foods = (await getFoods()) || []

  const handleDeleteFoods = async (foodIds: number[]) => {
    'use server'
    await deleteFoods(foodIds)
  }

  return (
    <PageContainer>
      <h1 className="text-3xl font-bold mb-4">View Foods</h1>
      <FoodList foods={foods} handleDeleteFoods={handleDeleteFoods} />
    </PageContainer>
  )
}

export default Page
