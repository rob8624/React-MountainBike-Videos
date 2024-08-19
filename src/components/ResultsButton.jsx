import React from 'react'


export default function ResultsButton({handleClick, videos}) {
  return(
    <button onClick={handleClick} 
            className='results--btn'>{videos.length > 0 ? 'Search again':'Show videos'}</button>
  )
}