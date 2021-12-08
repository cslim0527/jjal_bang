import React from 'react'
import styled from 'styled-components'

const Button = (props) => {
  const { _onClick, _type, _className , version, children } = props
  const styles = {
    type: _type,
    onClick: _onClick,
    className: _className,
    version
  }

  return (
    <ButtonEl {...styles}>
      { children }
    </ButtonEl>
  )
}

Button.defaultProps = {
}

export default Button

const ButtonEl = styled.button`
  border: 0;
  cursor: pointer;
  background-color: none;
  color: #fff;
  padding: 7px 12px 5px 12px;
  height: 35px;
  border-radius: 3px;
  font-size: 14px;
  font-family: 'BMJUA';
  background-color: transparent;

  ${
    (props) => {
      switch(props.version) {
        case 'green':
          return 'background-color: #1bb76e;'

        case 'cobalt-blue':
          return 'background-color: #6432f9;'
          
        default:
      }
    }
  }
`