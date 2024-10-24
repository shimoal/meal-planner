'use client'
import { useState } from 'react'

import Button from '@/components/Button'
import Input from '@/components/formElements/Input'
import { useRouter } from 'next/navigation'
import { Food } from '@/db/types'

type Props = {
  addFoodToDB: (name: string, calorieCount: number) => Promise<Food[]>
}

const AddFoodForm = ({ addFoodToDB }: Props) => {
  const [name, setName] = useState<string>()
  const [calorieCount, setCalorieCount] = useState<number>()

  const router = useRouter()

  const handleSubmit = async () => {
    const response = await addFoodToDB(name || '', calorieCount || 0)
    if (response.length > 0) {
      router.push('/add-food/success')
    }
  }

  return (
    <form action={handleSubmit} className="flex flex-col gap-4 p-4">
      <div>
        <label>Food name</label>
        <br />
        <Input
          id="food-name"
          name="food-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label>Calories (per 100 grams)</label>
        <br />
        <Input
          id="food-calories"
          name="food-calories"
          type="number"
          value={calorieCount}
          onChange={(e) => setCalorieCount(Number(e.target.value))}
        />
      </div>
      <Button type="submit" onSubmit={handleSubmit}>
        Add food
      </Button>
    </form>
  )
}

export default AddFoodForm
