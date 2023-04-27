interface ButtonProps {
  text: string;
  style?: string;
}

export const Button = ({ text, style }: ButtonProps) => {
  return (
    <div className={`btn ${style}`}>{text}</div>
  )
}
