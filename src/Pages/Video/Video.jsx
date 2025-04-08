import React from 'react'
import "./Video.css"
import PlayVideo from '../../Components/playVideo/playVideo'
import REcomented from '../../Components/Recommended/REcomented'
import { useParams } from 'react-router-dom'
const Video = () => {
  const {videoId,categoryId} = useParams();
  return (
    <div className='play-container'>
      <PlayVideo videoId={videoId} />
      <REcomented categoryId={categoryId}/>
      
    </div>
  )
}

export default Video


