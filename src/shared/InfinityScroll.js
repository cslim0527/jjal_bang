import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import _ from 'lodash'

import SyncLoader from "react-spinners/SyncLoader"

const InfinityScroll = (props) => {
  const { children, callNext, paging } = props

  const handleCallNext = _.throttle(function () {
    callNext()
}, 1000);

  const spinnerRef = useRef(null)
  const handleObserver = new IntersectionObserver(([{ isIntersecting }]) => {
    if (isIntersecting) {
      handleCallNext()
    }
  })
  
  useEffect(() => {
    if (paging.next === null) return
    if (!spinnerRef.current) return

    handleObserver.observe(spinnerRef.current)

    return () => {
      spinnerRef.current && handleObserver.unobserve(spinnerRef.current)
    }
  }, [paging])

  return (
    <React.Fragment>
      { children }
      {
        paging.next &&
        <Spinner ref={spinnerRef}>
          <SyncLoader color="rgba(255, 255, 255, 0.6)" size={15} margin={8}/>
        </Spinner>
      }
    </React.Fragment>
  )
}

InfinityScroll.defaultProps = {
  children: null,
  callNext: () => {},
  isNext: false,
  loading: false
}

const Spinner = styled.div`
  text-align: center;
  padding: 20px 0 40px 0;
`

export default InfinityScroll