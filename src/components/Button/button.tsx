"use client";

interface ButtonProp {
  label?: string;
  onClick?: () => void;
  primary?: boolean
  size?: string 
}

const Button = (props: ButtonProp) => {
  return (
    <button onClick={props.onClick} data-testid="button-test">
      {props.label}
    </button>
  );
};
export { Button };
