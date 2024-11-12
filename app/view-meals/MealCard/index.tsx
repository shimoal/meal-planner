import Link from 'next/link'

type Props = {
  id: number
  name: string
}

const MealCard = ({ name, id }: Props) => {
  return (
    <Link href={`/edit-meal/${id}`}>
      <div className="shadow hover:cursor-pointer p-4">Meal name: {name}</div>
    </Link>
  )
}

export default MealCard
