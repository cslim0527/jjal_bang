import React from 'react'
import { useSelector } from 'react-redux'
import { getCookie } from './Cookie'

const Permit = (props) => {
  const { children } = props
  const { user, is_login } = useSelector(state => state.user)

  if ( user && is_login) {
    return (
      <div>
        { children }
      </div>
    )
  }

  return null

}

export default Permit