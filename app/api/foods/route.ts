import { getFoods } from '@/app/(server)/foods'
import { NextResponse } from 'next/server'

export async function GET() {
  const response = await getFoods()
  return NextResponse.json(response)
}
