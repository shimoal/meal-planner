'use client'

import { Fragment, useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

import Button from '@/components/Button'
import FoodCard from '../FoodCard'
import {
  useMutation,
  useQueryClient,
  useInfiniteQuery,
} from '@tanstack/react-query'
import { deleteFoodItem, getPaginatedFoodList } from './getFoodList'

const FoodList = () => {
  const [selectedId, setSelectedFoodId] = useState<number | null>(null)

  const { ref, inView } = useInView()
  const queryClient = useQueryClient()

  const { data, isFetching, isFetchingNextPage, fetchNextPage } =
    useInfiniteQuery({
      queryKey: ['foods'],
      queryFn: getPaginatedFoodList,
      initialPageParam: 0,
      getPreviousPageParam: (firstPage) => firstPage.previousId,
      getNextPageParam: (lastpage) => lastpage.nextId,
    })

  useEffect(() => {
    if (inView) {
      fetchNextPage()
    }
  }, [fetchNextPage, inView])

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
        {data?.pages.map((page) => (
          <Fragment key={page.nextId}>
            {page.data.map(({ id, name, calorie_count }) => (
              <FoodCard
                key={id}
                onClick={() => !isFetching && toggleSelectItem(id)}
                selected={selectedId === id}
                name={name}
                calories={calorie_count}
              />
            ))}
          </Fragment>
        ))}
      </div>
      <div ref={ref}></div>
      <div>{isFetching && !isFetchingNextPage ? 'Loading...' : null}</div>
    </>
  )
}

export default FoodList
