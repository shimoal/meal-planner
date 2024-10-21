import PageContainer from '@/(components)/PageContainer'
import { addFood } from '../(server)/foods'
import AddFoodForm from './AddFoodForm'

const Page = async () => {
  const addFoodToDB = async (name: string, calorieCount: number) => {
    'use server'
    return await addFood({ name, calorieCount })
  }

  return (
    <PageContainer>
      <h1 className="text-3xl font-bold mb-4">Add Food</h1>

      <AddFoodForm addFoodToDB={addFoodToDB} />
    </PageContainer>
  )
}

export default Page
