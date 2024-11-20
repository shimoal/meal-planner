import { addFood, deleteFood, getFoods } from '@/app/(server)/foods'
import { getAuth } from '@clerk/nextjs/server'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const lastUpdatedAt = request.nextUrl.searchParams.get('lastUpdatedAt')
  let lastSeen
  if (lastUpdatedAt) {
    lastSeen = new Date(lastUpdatedAt)
  }

  const response = await getFoods({ lastSeen })
  return NextResponse.json(response)
}

export async function POST(request: NextRequest) {
  const { userId } = getAuth(request)

  if (!userId) {
    return new NextResponse('Unauthorized', { status: 401 })
  }

  const { name, calorie_count } = await request.json()
  const response = await addFood({ name, calorie_count })
  return NextResponse.json(response)
}

export async function DELETE(request: NextRequest) {
  const id = request.nextUrl.searchParams.get('id')
  const response = await deleteFood(Number(id))
  const deletedRows = response[0].numDeletedRows
  return NextResponse.json(`Deleted ${deletedRows} rows`)
}
