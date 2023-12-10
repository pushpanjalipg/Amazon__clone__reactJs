export function Product2({title,image1,image2,image3,image4,title1,title2,title3,title4}) {
    return (
      <div className='product'>
       <div className='product__title'>
          <h3>{title}</h3>
       </div>
  <div className='smallSlider'>
    <div>
       <img src={image1} alt={""} className='fourImage'/>
       <p>{title1}</p>
       <img src={image2} alt={""} className='fourImage'/>
       <p>{title2}</p>
       </div>
       <div className="smallSliderRow">
       <img src={image3} alt={""} className='fourImage'/>
       <p>{title3}</p>
       <img src={image4} alt={""} className='fourImage'/>
        <p>{title4}</p>
       </div>
       </div>   
        <p>Shop now</p>
      </div>
    )
  }
  
  