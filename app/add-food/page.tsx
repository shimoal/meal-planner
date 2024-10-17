import Button from '@/components/Button'
import Input from '@/components/formElements/Input'
import PageContainer from '@/components/PageContainer'

const Page = () => {
  return (
    <PageContainer>
      <h1 className="text-3xl font-bold mb-4">Add Food</h1>
      <form className="flex flex-col gap-4 p-4">
        <div>
          <label>Food name</label>
          <br />
          <Input id="food-name" name="food-name" type="text" />
        </div>
        <div>
          <label>Calories (per 100 grams)</label>
          <br />
          <Input id="food-calories" name="food-calories" type="number" />
        </div>
        <Button type="submit">Add food</Button>
      </form>
    </PageContainer>
  )
}

export default Page
