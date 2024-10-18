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

export interface Database {
  foods: FoodsTable
}

export type Food = Selectable<FoodsTable>
export type NewFood = Insertable<FoodsTable>
export type UpdateFood = Updateable<FoodsTable>
