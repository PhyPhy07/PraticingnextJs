'use client'
import React from 'react'

const AddToCart = () => {
  return (
    <div>
        <button onClick={() => console.log('clicked')}>Add to Cart</button>
    </div>
  )
}

export default AddToCart
//to make faster we need to only use client components for the parts that are needed to be dynamic, we need to make sure that the server components are not too big and not too complex