import clsx from 'clsx'

type Props = {
  name: string
  calories: number
  selected?: boolean
  onClick: () => void
}

const FoodCard = ({ name, calories, selected, onClick }: Props) => {
  return (
    <div
      onClick={onClick}
      className={clsx('shadow hover:cursor-pointer p-4', {
        'bg-red-100': selected,
        'bg-white': !selected,
      })}
    >
      <div>Food: {name}</div>
      <div>Calories per 100g: {calories}</div>
    </div>
  )
}

export default FoodCard
