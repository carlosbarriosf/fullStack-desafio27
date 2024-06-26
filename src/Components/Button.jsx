import React from 'react'

function Button({
    type= 'button',
    action = () => {},
    className,
    icon = undefined,
    label = undefined
}) {
  return (
    <button
        type={type}
        onClick={action}
        className={className}
    >
        {icon}
        {label}
    </button>
  )
}

export default Button