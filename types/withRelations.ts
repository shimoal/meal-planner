import { Food, Ingredient } from '@/db/types'

type IngredientWithFood = Ingredient & { food: Food[] }
