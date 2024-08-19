import React from 'react'



export default function Videos({videos}) {
return (
 
  <ul>{videos.map((item, index) => 
    (<>
      
        <li key={index}>
          <span className='video--index'>{index + 1}</span>
          <span className='video--title'>{item.snippet.title}</span>
          <div className='info--wrapper'>
            <iframe 
              src={`https://www.youtube.com/embed/${item.id.videoId}`} 
              title={item.snippet.title} 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
            <div>
              <div className='info--title'>{item.snippet.channelTitle}</div>
              <div className='info--description'>{item.snippet.description}</div>
            </div>
          </div>
        </li>
      
    </>)
    )}</ul>
    )
   }