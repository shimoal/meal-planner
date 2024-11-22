'use client'

import { Food, Ingredient, NewIngredient } from '@/db/types'
import { useState } from 'react'
import AddIngredient from './AddIngredient'
import Button from '@/components/Button'
import { useQuery } from '@tanstack/react-query'
import { getIngredients } from '@/app/(fetch)/ingredientsFetch'

type Props = {
  foods: Food[]
  mealId: number
  handleSaveIngredients: (ingredients: NewIngredient[]) => Promise<Ingredient[]>
}

const AddIngredients = ({ foods, mealId, handleSaveIngredients }: Props) => {
  const [ingredientsToAdd, setIngredientsToAdd] = useState<NewIngredient[]>([])

  const { data: ingredients, isFetching } = useQuery({
    queryKey: ['ingredients'],
    queryFn: async () => await getIngredients(mealId),
  })

  const handleAddingIngredient = (ingredient: NewIngredient) => {
    setIngredientsToAdd((i) => [...i, ingredient])
  }

  const getFoodNameFromId = (foodId: number) => {
    return foods.find((food) => food.id === foodId)?.name || ''
  }

  return (
    <div>
      {isFetching && <div>Loading...</div>}
      {ingredients && (
        <>
          <p>Ingredients:</p>
          <div>
            {ingredients.map((ingredient) => {
              return (
                <div>
                  {ingredient.food[0].name}: {ingredient.label_qty}{' '}
                  {ingredient.label}
                </div>
              )
            })}
          </div>
        </>
      )}
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
