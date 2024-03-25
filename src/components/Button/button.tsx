"use client"

interface ButtonProp {
  children: string;
  onClick?: () => void;
}

const Button = (props: ButtonProp) => {
  return (
    <button onClick={props.onClick} data-testid="button-test">
      {props.children}
    </button>
  ); 
};
export default Button;
