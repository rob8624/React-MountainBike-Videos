import './App.css'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ResultsButton from './components/ResultsButton'
import Videos from './components/video'



export default function App() {

  const apiKey = 'AIzaSyBXQWI3QraJjrIj4DDxixUyaRcggZjGnho';
  const apiUrl = 'https://www.googleapis.com/youtube/v3/search';
  
  const [videos, setVideos] = useState([])
  
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl, {
          params: {
              part: 'snippet',
              q: 'mtb',  // More specific query
              type: 'video',
              location: '51.631646285985084, -3.7494928526932414',  // Latitude, Longitude of the location
              locationRadius: '10km',
              order: 'viewCount',  // Order by most viewed videos
              maxResults: 10,  // Limit to 10 results
              key: apiKey,
          },
        });
        setVideos(response.data.items);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };
  
  

  const handleClick = () => {
    fetchData()
    console.log(videos)
  }
  
  
  return (
    <main>
      <div className='centering--wrapper'>
        <div>
          <div className='top--message'>Youtube MTB Videos</div>
          <ResultsButton handleClick={handleClick} videos={videos}/>
          <div>
          <Videos videos={videos}/>
          </div>
        </div>
      </div>
    </main>
  )
  
}

