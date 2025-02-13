import React from 'react';

const Button = (props) => {
  return (
    <button onClick={props.onClick} type="button" class="btn btn-primary">Convert</button>
  )
}

export default Button;