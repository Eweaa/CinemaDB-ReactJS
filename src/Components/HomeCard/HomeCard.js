import React from 'react';
import HomeCardCSS from './HomeCard.module.css'

const HomeCard = ({ img, name }) => {
  return (
    <div className={[HomeCardCSS.HomeCard, 'mx-2 p-2'].join(' ')}>
        <div>
            <img src={img}/>
        </div>
        <div>
            {name}
        </div>
    </div>
  )
}

export default HomeCard