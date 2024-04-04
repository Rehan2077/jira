"use client";

interface ButtonProp {
<<<<<<< HEAD
  label?: string;
  onClick?: () => void;
  primary?: boolean
  size?: string 
=======
  onClick?: () => void;
  primary?: boolean
  label?: string
  size?: string
>>>>>>> master
}

const Button = (props: ButtonProp) => {
  return (
    <button onClick={props.onClick} data-testid="button-test">
      {props.label}
    </button>
  );
};
export { Button };
