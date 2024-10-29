import { DetailedHTMLProps, InputHTMLAttributes } from 'react'

type Props = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

const Input = ({ id, name, value, onChange, type }: Props) => {
  return (
    <input
      className="rounded border border-gray w-full p-1"
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      type={type}
    />
  )
}

export default Input
