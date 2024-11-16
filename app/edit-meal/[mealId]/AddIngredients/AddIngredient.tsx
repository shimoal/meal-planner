'use client'

import Button from '@/components/Button'
import Input from '@/components/formElements/Input'
import Select from '@/components/formElements/Select/Select'
import { Food, NewIngredient } from '@/db/types'
import { useState } from 'react'

type Props = {
  foods: Food[]
  mealId: number
  handleAddingIngredient: (ingredient: NewIngredient) => void
}

const AddIngredient = ({ foods, mealId, handleAddingIngredient }: Props) => {
  const firstFoodId = foods[0].id
  const [ingredientToAdd, setIngredientToAdd] = useState<NewIngredient>({
    food_id: firstFoodId,
    meal_id: mealId,
  })

  const handleSubmit = () => {
    if (ingredientToAdd) {
      handleAddingIngredient(ingredientToAdd)
    }
  }

  const updateIngredient = (fieldName: string, value: string | number) => {
    setIngredientToAdd((i) => ({
      ...i,
      [fieldName]: value,
    }))
  }

  return (
    <div>
      <form action={handleSubmit}>
        <label>Food</label>
        <Select
          id="food"
          name="food"
          onChange={(e) => {
            const foodId = Number(e.target.value)
            updateIngredient('food_id', foodId)
          }}
          value={ingredientToAdd?.food_id}
          options={foods.map((food) => ({
            label: food.name,
            value: food.id,
          }))}
        />

        <label>Quantity</label>
        <Input
          id="ingredient-qty"
          type="number"
          onChange={(e) =>
            updateIngredient('label_qty', Number(e.target.value))
          }
        />
        <Input
          id="ingredient-qty-label"
          type="text"
          onChange={(e) => updateIngredient('label', e.target.value)}
        />
        <Button type="submit" onSubmit={handleSubmit}>
          Add Ingredient to Meal
        </Button>
      </form>
    </div>
  )
}

export default AddIngredient
