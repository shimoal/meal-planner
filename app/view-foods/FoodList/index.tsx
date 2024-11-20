'use client'

import { useState } from 'react'
import Button from '@/components/Button'
import FoodCard from '../FoodCard'
import { Food } from '@/db/types'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteFoodItem, getFoodList } from './getFoodList'

type Props = {}

const FoodList = ({}: Props) => {
  const [selectedIds, setSelectedIds] = useState<number[]>([])

  const { data }: { data: Food[] } = useQuery({
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
    const indexOfId = selectedIds.indexOf(id)
    if (indexOfId >= 0) {
      setSelectedIds((selectedIds) => {
        const newSelectedIds = [...selectedIds]
        newSelectedIds.splice(indexOfId, 1)
        return newSelectedIds
      })
    } else {
      setSelectedIds((selectedIds) => [...selectedIds, id])
    }
  }

  const deleteSelectedItems = async () => {
    await mutation.mutate(selectedIds[0])

    setSelectedIds([])
  }

  return (
    <>
      <div className="grid gap-4 p-4 w-[80%]">
        {selectedIds.length > 0 && (
          <>
            <Button onClick={deleteSelectedItems} color="warning">
              Delete {selectedIds.length} items(s)
            </Button>
          </>
        )}
        {data?.map(({ id, name, calorie_count }) => (
          <FoodCard
            key={id}
            onClick={() => toggleSelectItem(id)}
            selected={selectedIds.includes(id)}
            name={name}
            calories={calorie_count}
          />
        ))}
      </div>
    </>
  )
}

export default FoodList
