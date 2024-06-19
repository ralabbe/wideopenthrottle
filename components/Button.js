import React from 'react';
import Link from 'next/link';

const Button = ({
  href = '/',
  text = 'Submit',
  color = '',
  disabled = false,
  ariaLabel = '',
  target = '',
  rel = '',
  onClick = null,
}) => {
  ariaLabel = ariaLabel !== '' ? ariaLabel : text;
  disabled = disabled === true ? disabled : false;
  const colorClass = color.toLocaleLowerCase() === 'inverted' ? 'buttonInverted' : 'button';

  return (
    <Link href={href} target={target} className={colorClass} aria-label={ariaLabel} disabled={disabled} onClick={() => { if (typeof onClick === 'function') { onClick(); } }} rel={rel}>
      {text}
    </Link>
  );
};

export default Button;