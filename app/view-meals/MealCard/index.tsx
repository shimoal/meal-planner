type Props = {
  name: string
}

const MealCard = ({ name }: Props) => {
  return (
    <>
      <div>Meal name: {name}</div>
    </>
  )
}

export default MealCard
