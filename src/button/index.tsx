import { ButtonProps } from "./types";

function Button({ type = "green", text }: ButtonProps) {
  return (
    <button style={{backgroundColor: type}}>{text}</button>
  );
}

export default Button;
