'use client'
import { useState } from 'react'

import Button from '@/components/Button'
import Input from '@/components/formElements/Input'
import { Meal } from '@/db/types'
import Select from '@/components/formElements/Select/Select'

type Props = {
  addMeal: (meal: Meal) => Promise<Meal[]>
}

const AddMealForm = ({ addMeal }: Props) => {
  const [meal, setMeal] = useState<Partial<Meal>>({
    name: '',
    type: 'breakfast',
  })

  const handleSubmit = async () => {
    await addMeal(meal as Meal)
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
          onChange={(e) => handleFormUpdate('type', e.target.value)}
          value={meal.type}
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