import {
  ColumnType,
  Generated,
  Insertable,
  Selectable,
  Updateable,
} from 'kysely'

export interface FoodsTable {
  id: Generated<number>
  name: string
  calorie_count: number
  created_at: ColumnType<Date, string | undefined, never>
  updated_at: ColumnType<Date, string | undefined>
}

export type MealType = 'breakfast' | 'lunch' | 'dinner' | 'snack'

export interface MealsTable {
  id: Generated<number>
  name: string
  meal_type: MealType
  created_at: ColumnType<Date, string | undefined, never>
  updated_at: ColumnType<Date, string | undefined>
}

export interface Database {
  foods: FoodsTable
  meals: MealsTable
}

export type Food = Selectable<FoodsTable>
export type NewFood = Insertable<FoodsTable>
export type UpdateFood = Updateable<FoodsTable>

export type Meal = Selectable<MealsTable>
export type NewMeal = Insertable<MealsTable>
export type UpdateMeal = Updateable<MealsTable>
