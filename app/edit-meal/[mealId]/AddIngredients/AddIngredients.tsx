'use client'

import { Food, Ingredient, NewIngredient } from '@/db/types'
import { useState } from 'react'
import AddIngredient from './AddIngredient'
import Button from '@/components/Button'

type Props = {
  foods: Food[]
  mealId: number
  handleSaveIngredients: (ingredients: NewIngredient[]) => Promise<Ingredient[]>
}

const AddIngredients = ({ foods, mealId, handleSaveIngredients }: Props) => {
  const [ingredientsToAdd, setIngredientsToAdd] = useState<NewIngredient[]>([])

  const handleAddingIngredient = (ingredient: NewIngredient) => {
    setIngredientsToAdd((i) => [...i, ingredient])
  }

  const getFoodNameFromId = (foodId: number) => {
    return foods.find((food) => food.id === foodId)?.name || ''
  }

  return (
    <div>
      <h2>Ingredients to add:</h2>
      {ingredientsToAdd.map((ingredient) => (
        <div key={ingredient.food_id}>
          {getFoodNameFromId(ingredient.food_id)} - {ingredient.label_qty}{' '}
          {ingredient.label}
        </div>
      ))}
      <AddIngredient
        foods={foods}
        mealId={mealId}
        handleAddingIngredient={handleAddingIngredient}
      />
      <Button onClick={() => handleSaveIngredients(ingredientsToAdd)}>
        Save Ingredients to Meal
      </Button>
    </div>
  )
}

export default AddIngredients
