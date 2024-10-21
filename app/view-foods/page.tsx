import PageContainer from '@/(components)/PageContainer'
import { addFood, getFoods } from '../(server)/foods'

const Page = async () => {
  const foods = (await getFoods()) || []

  return (
    <PageContainer>
      <h1 className="text-3xl font-bold mb-4">View Foods</h1>
      <h2>Existing Foods:</h2>
      {foods.map((food) => (
        <div>
          <div>Food: {food.name}</div>
          <div>Calories per 100g: {food.calorie_count}</div>
        </div>
      ))}
    </PageContainer>
  )
}

export default Page
