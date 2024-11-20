'use client'
import { useState } from 'react'

import Button from '@/components/Button'
import Input from '@/components/formElements/Input'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { addFood } from './addFood'

type Props = {}

const AddFoodForm = ({}: Props) => {
  const [name, setName] = useState<string>('')
  const [calorieCount, setCalorieCount] = useState<number>(0)

  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn: addFood,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['foods'] })
      setName('')
      setCalorieCount(0)
    },
  })

  const handleSubmit = async () => {
    mutation.mutate({ name: name, calorie_count: calorieCount })
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
