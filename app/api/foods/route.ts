import { deleteFood, getFoods } from '@/app/(server)/foods'
import { NextRequest, NextResponse } from 'next/server'

export async function GET() {
  const response = await getFoods()
  return NextResponse.json(response)
}

export async function DELETE(request: NextRequest) {
  const id = request.nextUrl.searchParams.get('id')
  const response = await deleteFood(Number(id))
  const deletedRows = response[0].numDeletedRows
  return NextResponse.json(`Deleted ${deletedRows} rows`)
}
