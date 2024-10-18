import PageContainer from '@/components/PageContainer'
import { addFood, getFoods } from '../(server)/foods'
import AddFoodForm from './AddFoodForm'

const Page = async () => {
  const foods = await getFoods()

  const addFoodToDB = async (name: string, calorieCount: number) => {
    'use server'
    await addFood({ name, calorieCount })
  }

  return (
    <PageContainer>
      <h1 className="text-3xl font-bold mb-4">Add Food</h1>
      <h2>Existing Foods:</h2>
      <div>{JSON.stringify(foods)}</div>

      <AddFoodForm addFoodToDB={addFoodToDB} />
    </PageContainer>
  )
}

export default Page
