import Button from '@/components/Button'
import PageContainer from '@/components/PageContainer'

const Page = () => {
  return (
    <PageContainer>
      <h1>Add Food</h1>
      <form>
        <label>Food name</label>
        <br />
        <input id="food-name" name="food-name" type="text" />
        <br />
        <label>Calories (per 100 grams)</label>
        <br />
        <input id="food-calories" name="food-calories" type="number" />
        <br />
      </form>
      <Button>Add food</Button>
    </PageContainer>
  )
}

export default Page
