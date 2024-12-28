import React from 'react'

const H3 = ({title , className}) => {
  return (
    <h3 className={`h3 ${className}`}>{title}</h3>
  )
}

export default H3