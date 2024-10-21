import PageContainer from '@/(components)/PageContainer'
import Link from 'next/link'

const Page = async () => {
  return (
    <PageContainer>
      <h1 className="text-3xl font-bold mb-4">Success!</h1>
      <div>You've successfully added a new food!</div>
      <Link href="/add-food">Add more foods</Link>
    </PageContainer>
  )
}

export default Page
