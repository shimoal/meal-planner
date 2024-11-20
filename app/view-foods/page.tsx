import PageContainer from '@/components/PageContainer'
import { deleteFoods } from '../(server)/foods'
import FoodList from './FoodList'

const Page = async () => {
  const handleDeleteFoods = async (foodIds: number[]) => {
    'use server'
    await deleteFoods(foodIds)
  }

  return (
    <PageContainer>
      <h1 className="text-3xl font-bold mb-4">View Foods</h1>
      <h2>Existing Foods:</h2>
      <FoodList handleDeleteItemIds={handleDeleteFoods} />
    </PageContainer>
  )
}

export default Page
