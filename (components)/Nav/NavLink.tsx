import Link from 'next/link'

type Props = {
  href: string
  children: React.ReactNode
}
const NavLink = ({ href, children }: Props) => {
  return (
    <Link className="font-bold text-white" href={href}>
      <div>{children}</div>
    </Link>
  )
}

export default NavLink
