'use client'

import { useState } from 'react'
import Button from '@/components/Button'
import FoodCard from '../FoodCard'
import { Food } from '@/db/types'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteFoodItem, getFoodList } from './getFoodList'

type Props = {}

const FoodList = ({}: Props) => {
  const [selectedId, setSelectedFoodId] = useState<number | null>(null)

  const { data }: { data?: Food[] } = useQuery({
    queryKey: ['foods'],
    queryFn: getFoodList,
  })
  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn: deleteFoodItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['foods'] })
    },
  })

  const toggleSelectItem = (id: number) => {
    setSelectedFoodId((selectedId) => {
      if (id === selectedId) return null
      return id
    })
  }

  const deleteSelectedItems = async () => {
    if (selectedId) {
      mutation.mutate(selectedId)
    }
    setSelectedFoodId(null)
  }

  return (
    <>
      <div className="grid gap-4 p-4 w-[80%]">
        {selectedId && (
          <>
            <Button onClick={deleteSelectedItems} color="warning">
              Delete
            </Button>
          </>
        )}
        {data?.map(({ id, name, calorie_count }) => (
          <FoodCard
            key={id}
            onClick={() => toggleSelectItem(id)}
            selected={selectedId === id}
            name={name}
            calories={calorie_count}
          />
        ))}
      </div>
    </>
  )
}

export default FoodList
