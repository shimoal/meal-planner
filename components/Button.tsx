type Props = {
  children: React.ReactNode
}

const Button = ({ children }: Props) => {
  return <button className="p-8">{children}</button>
}

export default Button
