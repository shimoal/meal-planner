import PageContainer from '@/components/PageContainer'
import AddFoodForm from './AddFoodForm'

const Page = async () => {
  return (
    <PageContainer>
      <h1 className="text-3xl font-bold mb-4">Add Food</h1>

      <AddFoodForm />
    </PageContainer>
  )
}

export default Page
