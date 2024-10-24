import PageContainer from '@/components/PageContainer'
import Button from '@/components/Button'
import Link from 'next/link'

export default function Home() {
  return (
    <PageContainer>
      <h1>Meal Planner</h1>
      <Link href="/add-food">
        <Button>Add Food</Button>
      </Link>
    </PageContainer>
  )
}
