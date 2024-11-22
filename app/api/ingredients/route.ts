import {
  addIngredients,
  getIngredientsForMeal,
} from '@/app/(server)/ingredients'
import { getAuth } from '@clerk/nextjs/server'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const mealId = Number(request.nextUrl.searchParams.get('mealId'))

  const data = await getIngredientsForMeal(mealId)

  return NextResponse.json(data)
}

export async function POST(request: NextRequest) {
  const { userId } = getAuth(request)

  if (!userId) {
    return new NextResponse('Unauthorized', { status: 401 })
  }

  const ingredients = await request.json()
  const response = await addIngredients(ingredients)
  return NextResponse.json(response)
}
