import React from 'react'
// import "../widgets.css"
import Para from '../Typography/Para'
import H6 from '../Typography/H6'

const Card4 = ({ items, index }) => {
    return (
        <div className='primaryborder card4-body'>
            <H6 title={items.title} />
            <Para title={items.para} />
        </div>
    )
}

export default Card4