'use client'

import { Food } from '@/db/types'
import FoodCard from '../FoodCard'
import { useState } from 'react'
import Button from '@/components/Button'

type Props = {
  foods: Food[]
  handleDeleteFoods: (foodIds: number[]) => Promise<void>
}
const FoodList = ({ foods, handleDeleteFoods }: Props) => {
  const [selectedFoodIds, setSelectedFoodIds] = useState<number[]>([])
  const [foodsAvailable, setFoodsAvailable] = useState(foods)

  const toggleSelectFood = (id: number) => {
    const indexOfId = selectedFoodIds.indexOf(id)
    if (indexOfId >= 0) {
      setSelectedFoodIds((selectedFoodIds) => {
        const newSelectedFoods = [...selectedFoodIds]
        newSelectedFoods.splice(indexOfId, 1)
        return newSelectedFoods
      })
    } else {
      setSelectedFoodIds((selectedFoodIds) => [...selectedFoodIds, id])
    }
  }

  const deleteSelectedFoods = async () => {
    await handleDeleteFoods(selectedFoodIds)
    // reset food list and selected foods after deleting
    setFoodsAvailable((foods) =>
      foods.filter((food) => !selectedFoodIds.includes(food.id))
    )
    setSelectedFoodIds([])
  }

  return (
    <>
      <h2>Existing Foods:</h2>
      <div className="grid grid-cols-3 gap-4 p-4">
        {foodsAvailable.map((food) => (
          <FoodCard
            id={food.id}
            isSelected={selectedFoodIds.includes(food.id)}
            name={food.name}
            calories={food.calorie_count}
            key={`food-${food.id}`}
            onClick={toggleSelectFood}
          />
        ))}
      </div>
      {selectedFoodIds.length > 0 && (
        <>
          <Button onClick={deleteSelectedFoods} color="warning">
            Delete {selectedFoodIds.length} food(s)
          </Button>
        </>
      )}
    </>
  )
}

export default FoodList
