import { getIngredientsForMeal } from '@/app/(server)/ingredients'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const mealId = Number(request.nextUrl.searchParams.get('mealId'))

  const data = await getIngredientsForMeal(mealId)

  return NextResponse.json(data)
}
