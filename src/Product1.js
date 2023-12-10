export function Product1({title,image1,image2,image3,image4,image5,image6,image7,image8,image9}) {
    return (
      <div className='product'>
       <div className='product__title'>
          <h3>{title}</h3>
       </div>
  <div className='smallSlider'>
       <img src={image1} alt={""} />
       <img src={image2} alt={""} />
       <img src={image3} alt={""} />
       <img src={image4} alt={""} />
       <img src={image5} alt={""} />
       <img src={image6} alt={""} />
       <img src={image7} alt={""} />
       <img src={image8} alt={""} />
       </div>   
        <p>Shop now</p>
      </div>
    )
  }
  
  