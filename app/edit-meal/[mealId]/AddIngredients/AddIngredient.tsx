'use client'

import Button from '@/components/Button'
import Input from '@/components/formElements/Input'
import Select from '@/components/formElements/Select/Select'
import { Food } from '@/db/types'
import { useState } from 'react'

type Props = {
  foods: Food[]
  handleAddingIngredient: (ingredient: Ingredient) => void
}

export type Ingredient = {
  food_id?: number
  food_name?: string
  quantity?: number
  quantity_in_grams?: number
  quantity_label?: string
}

const AddIngredient = ({ foods, handleAddingIngredient }: Props) => {
  const [ingredientToAdd, setIngredientToAdd] = useState<Ingredient | null>(
    null
  )

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
            updateIngredient('food_id', Number(e.target.value))
            updateIngredient(
              'food_name',
              foods.find((food) => food.id === Number(e.target.value))?.name ||
                ''
            )
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
          onChange={(e) => updateIngredient('quantity', Number(e.target.value))}
        />
        <Input
          id="ingredient-qty-label"
          type="text"
          onChange={(e) => updateIngredient('quantity_label', e.target.value)}
        />
        <Button type="submit" onSubmit={handleSubmit}>
          Add Ingredient to Meal
        </Button>
      </form>
    </div>
  )
}

export default AddIngredient
