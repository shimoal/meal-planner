import PageContainer from '@/components/PageContainer'
import { getMeals } from '../(server)/meals'
import MealCard from './MealCard'

const Page = async () => {
  const meals = (await getMeals()) || []

  return (
    <PageContainer>
      <h1 className="text-3xl font-bold mb-4">View Foods</h1>
      <h2>Existing Meals:</h2>
      <div className="grid grid-cols-3 gap-4 p-4">
        {meals.map(({ id, name }) => (
          <MealCard key={id} id={id} name={name} />
        ))}
      </div>
    </PageContainer>
  )
}

export default Page
