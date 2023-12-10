import React from 'react'
import './Product.css'
function Product({title,image,image1}) {
  return (
    <div className='product'>
     <div className='product__title'>
        <h3>{title}</h3>
     </div>
     <img src={image} alt={""} className='img'/>
        
      <p>Shop now</p>
    </div>
  )
}

export default Product
// export default Product
