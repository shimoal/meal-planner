import clsx from 'clsx'

type Props = {
  id: number
  name: string
  calories: number
  isSelected: boolean
  onClick: (id: number) => void
}

const FoodCard = ({ id, name, calories, isSelected, onClick }: Props) => {
  return (
    <div
      className={clsx('shadow hover:cursor-pointer p-4', {
        'bg-red-100': isSelected,
      })}
      onClick={() => onClick(id)}
    >
      <div>Food: {name}</div>
      <div>Calories per 100g: {calories}</div>
    </div>
  )
}

export default FoodCard
