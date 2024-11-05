'use client'

import { Food } from '@/db/types'
import { useState } from 'react'
import AddIngredient, { Ingredient } from './AddIngredient'

type Props = {
  foods: Food[]
}

const AddIngredients = ({ foods }: Props) => {
  const [ingredientsToAdd, setIngredientsToAdd] = useState<Ingredient[]>([])

  const handleAddingIngredient = (ingredient: Ingredient) => {
    setIngredientsToAdd((i) => [...i, ingredient])
  }

  return (
    <div>
      <h2>Ingredients to add:</h2>
      {ingredientsToAdd.map((ingredient) => (
        <div>{ingredient.food_name}</div>
      ))}
      <AddIngredient
        foods={foods}
        handleAddingIngredient={handleAddingIngredient}
      />
    </div>
  )
}

export default AddIngredients
