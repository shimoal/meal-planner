import PageContainer from '@/(components)/PageContainer'
import { getFoods } from '../(server)/foods'
import FoodList from './FoodList'

const Page = async () => {
  const foods = (await getFoods()) || []

  return (
    <PageContainer>
      <h1 className="text-3xl font-bold mb-4">View Foods</h1>
      <FoodList foods={foods} />
    </PageContainer>
  )
}

export default Page
