'use client'

import { Food, NewIngredient } from '@/db/types'
import { useState } from 'react'
import AddIngredient from './AddIngredient'
import Button from '@/components/Button'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { addIngredients, getIngredients } from '@/app/(fetch)/ingredientsFetch'

type Props = {
  foods: Food[]
  mealId: number
}

const AddIngredients = ({ foods, mealId }: Props) => {
  const [ingredientsToAdd, setIngredientsToAdd] = useState<NewIngredient[]>([])

  const queryClient = useQueryClient()
  const { data: ingredients, isFetching } = useQuery({
    queryKey: ['ingredients'],
    queryFn: async () => await getIngredients(mealId),
  })
  const mutation = useMutation({
    mutationFn: addIngredients,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['ingredients'] })
      setIngredientsToAdd([])
    },
  })

  const handleAddingIngredient = (ingredient: NewIngredient) => {
    setIngredientsToAdd((i) => [...i, ingredient])
  }

  const getFoodNameFromId = (foodId: number) => {
    return foods.find((food) => food.id === foodId)?.name || ''
  }

  const handleSaveIngredients = () => {
    mutation.mutate(ingredientsToAdd)
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
      <Button onClick={handleSaveIngredients}>Save Ingredients to Meal</Button>
    </div>
  )
}

export default AddIngredients
