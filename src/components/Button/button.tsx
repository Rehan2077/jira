interface ButtonProp {
  children: string;
  onClick?: () => void;
}

const Button = (props: ButtonProp) => {
  const handleClick = () => console.log("Hey");

  if (!props.onClick)
    return (
      <button onClick={handleClick} data-testid="button-test">
        {props.children}
      </button>
    );

  return (
    <button onClick={props.onClick} data-testid="button-test">
      {props.children}
    </button>
  );
};
export default Button;
