import React from 'react'



export const OverViewCard = ({user, audienceType, audience}) => {
  return (
    <article className='bg-Light-Grayish-Blue'>
        <p>{user}</p>
        <p>{audience}</p>
        <p>{audienceType}</p>
    
    </article>
  )
}
