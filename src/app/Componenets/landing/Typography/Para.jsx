import React from 'react'

const Para = ({title , className}) => {
  return (
    <p className={`p ${className}`}>{title}</p>
  )
}

export default Para