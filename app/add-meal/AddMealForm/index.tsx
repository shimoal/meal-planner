'use client'
import { useState } from 'react'

import Button from '@/components/Button'
import Input from '@/components/formElements/Input'
import { Meal, MealType } from '@/db/types'
import Select from '@/components/formElements/Select/Select'
import { useRouter } from 'next/navigation'

type Props = {
  addMeal: (meal: { name: string; mealType: MealType }) => Promise<Meal[]>
}

const AddMealForm = ({ addMeal }: Props) => {
  const [meal, setMeal] = useState<{ name: string; mealType: MealType }>({
    name: '',
    mealType: 'breakfast',
  })

  const router = useRouter()

  const handleSubmit = async () => {
    const response = await addMeal(meal)
    if (response.length > 0) {
      router.push(`/edit-meal/${response[0].id}`)
    }
  }

  const handleFormUpdate = (formField: string, value: string) => {
    setMeal({ ...meal, [formField]: value })
  }

  return (
    <form action={handleSubmit} className="flex flex-col gap-4 p-4">
      <div>
        <label>Meal name</label>
        <br />
        <Input
          id="meal-name"
          name="meal-name"
          type="text"
          value={meal.name}
          onChange={(e) => handleFormUpdate('name', e.target.value)}
        />
      </div>
      <div>
        <label>Meal Type</label>
        <br />
        <Select
          id="meal-type"
          name="meal-type"
          onChange={(e) => handleFormUpdate('mealType', e.target.value)}
          value={meal.mealType}
          options={[
            { label: 'Breakfast', value: 'breakfast' },
            { label: 'Lunch', value: 'lunch' },
            { label: 'Dinner', value: 'dinner' },
            { label: 'Snack', value: 'snack' },
          ]}
        ></Select>
      </div>
      <Button type="submit" onSubmit={handleSubmit}>
        Add meal
      </Button>
    </form>
  )
}

export default AddMealForm
