import React from 'react'

const H1 = ({title, className , spanTitle, breakpoint}) => {
  return (
    <h1 className={`h1 ${className}`}>
      {title}
      {breakpoint && <span className="secondary">{spanTitle}</span>}
      </h1>
  )
}

export default H1