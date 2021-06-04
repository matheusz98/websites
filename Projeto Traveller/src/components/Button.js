import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

// Estilos dos botões
const styles = ['btn--primary', 'btn--outline', 'btn--test'];

// Tamanho dos botões
const sizes = ['btn--medium', 'btn--large'];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize
}) => {
  const checkButtonStyle = styles.includes(buttonStyle) ? buttonStyle: styles[0];

  const checkButtonSize = sizes.includes(buttonSize) ? buttonSize : sizes[0];

  return (
    <Link to='/login' className='btn-mobile'>
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};
