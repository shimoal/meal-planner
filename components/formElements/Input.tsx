import { DetailedHTMLProps, InputHTMLAttributes } from 'react'

const Input = ({
  id,
  name,
  value,
  onChange,
  type,
}: DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>) => {
  return (
    <input
      className="rounded border border-gray"
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      type={type}
    />
  )
}

export default Input
