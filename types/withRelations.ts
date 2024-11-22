import { Food, Ingredient } from '@/db/types'

export type IngredientWithFood = Ingredient & { food: Food[] }
