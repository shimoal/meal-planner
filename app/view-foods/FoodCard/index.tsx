type Props = {
  name: string
  calories: number
}

const FoodCard = ({ name, calories }: Props) => {
  return (
    <>
      <div>Food: {name}</div>
      <div>Calories per 100g: {calories}</div>
    </>
  )
}

export default FoodCard
