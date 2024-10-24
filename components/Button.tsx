import clsx from 'clsx'
import { ButtonHTMLAttributes } from 'react'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  color?: 'primary' | 'secondary' | 'warning'
  children: React.ReactNode
}

const Button = ({ color, children, ...otherProps }: Props) => {
  return (
    <button
      {...otherProps}
      className={clsx(
        'py-2 px-2 rounded',
        color === 'warning' && 'bg-red-300 hover:bg-red-500',
        (!color || color === 'primary') && 'bg-indigo-300 hover:bg-indigo-500'
      )}
    >
      {children}
    </button>
  )
}

export default Button
