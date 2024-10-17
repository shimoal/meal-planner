import { DetailedHTMLProps, InputHTMLAttributes } from 'react'

const Input = ({
  id,
  name,
}: DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>) => {
  return <input className="rounded border border-gray" id={id} name={name} />
}

export default Input
