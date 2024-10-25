import { ButtonContainer } from "./styles";
import { IButtonProps } from "./types";

const Button = ({ title, disable, onClick }: IButtonProps) => {
  return disable ? <ButtonContainer onClick={onClick}>{title}</ButtonContainer> : <ButtonContainer >{title}</ButtonContainer>;
};

export default Button;
