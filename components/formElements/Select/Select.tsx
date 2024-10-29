import {
  DetailedHTMLProps,
  OptionHTMLAttributes,
  SelectHTMLAttributes,
} from 'react'

type OptionType = { label: string } & DetailedHTMLProps<
  OptionHTMLAttributes<HTMLOptionElement>,
  HTMLOptionElement
>

type Props = {
  options?: OptionType[]
} & DetailedHTMLProps<
  SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
>

const Select = ({ id, name, options, value, onChange }: Props) => {
  return (
    <select
      className="rounded border border-gray w-full py-1"
      id={id}
      name={name}
      value={value}
      onChange={onChange}
    >
      {options?.map((option) => (
        <option>{option.label}</option>
      ))}
    </select>
  )
}

export default Select
