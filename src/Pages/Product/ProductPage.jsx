import React from 'react'
import { useParams } from 'react-router-dom'
function ProductPage() {
    const {id} = useParams();
  return (
    <div>
      <h1>ProductPage{id}</h1>
    </div>
  )
}

export default ProductPage
