import PageContainer from '@/components/PageContainer'
import FoodList from './FoodList'

const Page = async () => {
  return (
    <PageContainer>
      <h1 className="text-3xl font-bold mb-4">View Foods</h1>
      <h2>Existing Foods:</h2>
      <FoodList />
    </PageContainer>
  )
}

export default Page
