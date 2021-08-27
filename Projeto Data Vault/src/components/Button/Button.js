import "../../Styles/Button/Button.css";

const Styles = ["btn-primary", "btn-outline"];
const Sizes = ["btn-medium", "btn-large", "btn-mobile", "btn-wide"];
const Colors = ["primary", "blue", "purple", "orange", "black"];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  buttonColor,
}) => {
  const checkButtonStyle = Styles.includes(buttonStyle)
    ? buttonStyle
    : Styles[0];

  const checkButtonSize = Sizes.includes(buttonSize) ? buttonSize : Sizes[0];

  const checkButtonColor = Colors.includes(buttonColor)
    ? buttonColor
    : null;

  return (
    <button
      className={`btn ${checkButtonStyle} ${checkButtonSize}
        ${checkButtonColor}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;