import React from 'react'
import facebookLogo from '../assets/images/icon-facebook.svg'
import twitterLogo from '../assets/images/icon-twitter.svg'
import instagramLogo from '../assets/images/icon-instagram.svg'
import youtubeLogo from '../assets/images/icon-youtube.svg'

const networkslogos = {
  Facebook : facebookLogo,
  Twitter : twitterLogo,
  YouTube : youtubeLogo,
  Instagram : instagramLogo
  

}





export const OverViewCard = ({user, audienceType, audience, network}) => {
  return (
    <article className='bg-Light-Grayish-Blue w-[326px] h-[216px] mb-4 rounded-[5px]  mx-auto'>
        <img src={networkslogos[network]} alt={`logo ${network}`} className='w-[20px] h-[20px]'/>
        <p>{user}</p>
        <p>{audience}</p>
        <p>{audienceType}</p>
    
    </article>
  )
}
