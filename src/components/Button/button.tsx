"use client"

interface ButtonProp {
  onClick?: () => void;
  primary?: boolean
  label?: string
  size?: string
}

const Button = (props: ButtonProp) => {
  return (
    <button onClick={props.onClick} data-testid="button-test">
      {props.label}
    </button>
  ); 
};
export default Button;
