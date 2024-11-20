import { addFood, deleteFood, getFoods } from '@/app/(server)/foods'
import { getAuth } from '@clerk/nextjs/server'
import { NextRequest, NextResponse } from 'next/server'

const PAGE_SIZE = 10

export async function GET(request: NextRequest) {
  const cursor = Number(request.nextUrl.searchParams.get('cursor'))

  const data = await getFoods({ cursor, pageSize: PAGE_SIZE })

  const nextId = cursor + PAGE_SIZE
  const previousId = cursor - PAGE_SIZE > 0 ? cursor - PAGE_SIZE : 0

  return NextResponse.json({ data, nextId, previousId })
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
