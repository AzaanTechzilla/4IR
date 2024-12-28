import React from 'react'

const H2 = ({ title, className, spanTitle, breakpoint }) => {
  return (
    <h2 className={`h2 ${className}`}>
      {title}
      {breakpoint && <span className='primary'> {spanTitle}</span>}
    </h2>
  )
}

export default H2