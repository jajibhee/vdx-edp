import { routes } from "../routes";

interface ButtonProps {
  text: string;
  style?: string;
}

export const Button = ({ text, style }: ButtonProps) => {
  return (
    <div onClick={() => window.open(routes.signin)} className={`btn ${style}`}>{text}</div>
  )
}
