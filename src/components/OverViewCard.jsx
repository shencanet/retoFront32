import React from 'react'



export const OverViewCard = ({user, audienceType, audience}) => {
  return (
    <article>
        <p>{user}</p>
        <p>{audience}</p>
        <p>{audienceType}</p>
    
    </article>
  )
}
