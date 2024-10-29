import PageContainer from '@/components/PageContainer'

const Page = ({ params }: { params: { mealId: string } }) => {
  return (
    <PageContainer>
      <h1 className="text-3xl font-bold mb-4">Edit Meal #{params.mealId}</h1>
    </PageContainer>
  )
}

export default Page
