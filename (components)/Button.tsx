import { ButtonHTMLAttributes } from 'react'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode
}

const Button = ({ children }: Props) => {
  return (
    <button className="py-2 px-2 bg-indigo-500 hover:bg-indigo-600 rounded">
      {children}
    </button>
  )
}

export default Button
