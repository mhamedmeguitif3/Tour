import React, { useState } from 'react';

const Tour = ({id,name , info , price , image , tours ,setTours}) => {
  const [readMore , setReadMore] = useState(false)
  const handeldeleteTour  = (id)=>{
      console.log(id)
      const temptours = tours.filter((item)=>item.id != id.id )
      setTours(temptours)
  }
  return (
    <article className='single-tour'>
      <img src={image} alt={name} />
      <footer>
        <div className='tour-info'>
          <h4>{name}</h4>
          <h4 className='tour-price'>${price}</h4> 
        </div>
        <p>{
        readMore ? info : `${info.substring(0,200)}....`}
        <button onClick={()=> setReadMore(!readMore)}>{readMore ?  "Show less "  : "Read More"}</button></p>
        
        <button className='delete-btn' onClick={()=>handeldeleteTour({id})}>not interested</button>
      </footer>
    </article>
  );
};

export default Tour;
