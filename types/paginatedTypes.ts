import { Food } from '@/db/types'

export type Paginated<T> = { data: T[]; previousId: number; nextId: number }

export type PaginatedFood = Paginated<Food>
