'use client'

import { useState } from 'react'
import Button from '@/components/Button'
import clsx from 'clsx'
import FoodCard from '../FoodCard'
import { Food } from '@/db/types'

type Props = {
  handleDeleteItemIds: (ids: number[]) => Promise<void>
  foods: Food[]
}

const FoodList = ({ handleDeleteItemIds, foods }: Props) => {
  const [selectedIds, setSelectedIds] = useState<number[]>([])
  const [itemsAvailable, setItemsAvailable] = useState(foods)

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
    await handleDeleteItemIds(selectedIds)
    // reset item list and selected items after deleting
    setItemsAvailable((items) =>
      items.filter((item) => !selectedIds.includes(item.id))
    )
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
        {itemsAvailable.map(({ id, name, calorie_count }) => (
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
