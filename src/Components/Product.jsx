import React from 'react'
import '../Style/Product.css'
import CardProduct from './CardProduct'

const Product = () => {
  return (
    <div className='container-product'>
        <h3 className='title'>Product Roadmap</h3>
        <CardProduct />
    </div>
  )
}

export default Product
