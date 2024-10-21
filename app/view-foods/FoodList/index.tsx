'use client'

import { Food } from '@/db/types'
import FoodCard from '../FoodCard'
import { useState } from 'react'
import Button from '@/(components)/Button'

type Props = {
  foods: Food[]
}
const FoodList = ({ foods }: Props) => {
  const [selectedFoods, setSelectedFoods] = useState<number[]>([])

  const toggleSelectFood = (id: number) => {
    const indexOfId = selectedFoods.indexOf(id)
    if (indexOfId >= 0) {
      setSelectedFoods((selectedFoods) => {
        const newSelectedFoods = [...selectedFoods]
        newSelectedFoods.splice(indexOfId, 1)
        return newSelectedFoods
      })
    } else {
      setSelectedFoods((selectedFoods) => [...selectedFoods, id])
    }
  }

  return (
    <>
      <h2>Existing Foods:</h2>
      {foods.map((food) => (
        <FoodCard
          id={food.id}
          isSelected={selectedFoods.includes(food.id)}
          name={food.name}
          calories={food.calorie_count}
          key={`food-${food.id}`}
          onClick={toggleSelectFood}
        />
      ))}
      {selectedFoods.length > 0 && (
        <>
          <Button color="warning">Delete {selectedFoods.length} food(s)</Button>
        </>
      )}
    </>
  )
}

export default FoodList
