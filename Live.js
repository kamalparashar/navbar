import { Avatar } from '@mui/material'
import React from 'react'
import "./Live.css"

function live({image, timestamp,channel,title,views,channelImage}) {
  return (
    <div className='videoCard'>
      <img  className='videoCard_thumbnail' src={image} alt=""/>
      <div className='videoCard_info'>
        <Avatar 
          className='videoCard_avatar' 
          alt={channel}
          src={channelImage}
        />
        <div className='videoCard_text'>
          <h3>{title}</h3>
          <p>{channel}</p>
          <p>{views} . {timestamp}</p>
        </div>
      </div>
    </div>
  )
}

export default live