'use client'

import { useState } from 'react'
import Button from '@/components/Button'
import clsx from 'clsx'

type Props = {
  handleDeleteItemIds: (ids: number[]) => Promise<void>
  items: { id: number; content: React.ReactNode }[]
}

const SelectAndDeleteList = ({ handleDeleteItemIds, items }: Props) => {
  const [selectedIds, setSelectedIds] = useState<number[]>([])
  const [itemsAvailable, setItemsAvailable] = useState(items)

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
      <div className="grid grid-cols-3 gap-4 p-4">
        {itemsAvailable.map(({ id, content }) => (
          <div
            key={id}
            className={clsx('shadow hover:cursor-pointer p-4', {
              'bg-red-100': selectedIds.includes(id),
            })}
            onClick={() => toggleSelectItem(id)}
          >
            {content}
          </div>
        ))}
      </div>
      {selectedIds.length > 0 && (
        <>
          <Button onClick={deleteSelectedItems} color="warning">
            Delete {selectedIds.length} items(s)
          </Button>
        </>
      )}
    </>
  )
}

export default SelectAndDeleteList
