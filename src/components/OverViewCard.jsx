import React from 'react'
import facebookLogo from '../assets/images/icon-facebook.svg'



export const OverViewCard = ({user, audienceType, audience, network}) => {
  return (
    <article className='bg-Light-Grayish-Blue w-[326px] h-[216px] mb-4 rounded-[5px]  mx-auto'>
        <img src={facebookLogo} alt={`logo ${network}`} className='w-[20px] h-[20px] mt-4 ml-4'/>
        <p>{user}</p>
        <p>{audience}</p>
        <p>{audienceType}</p>
    
    </article>
  )
}
