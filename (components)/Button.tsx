import clsx from 'clsx'
import { ButtonHTMLAttributes } from 'react'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  color?: 'primary' | 'secondary' | 'warning'
  children: React.ReactNode
}

const Button = ({ color, children }: Props) => {
  return (
    <button
      className={clsx('py-2 px-2 rounded', {
        'bg-indigo-500 hover:bg-indigo-600': !color || color === 'primary',
        'bg-red-500 hover:bg-red-600': color === 'warning',
      })}
    >
      {children}
    </button>
  )
}

export default Button
