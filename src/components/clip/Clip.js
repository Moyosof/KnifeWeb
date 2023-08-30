import React from 'react'
import './Clip.css'
import ReactPlayer from 'react-player'
import clip from '../../assest/baln.mp4'



const Clip = () => {
  return (
    <div className='clip'>
        <ReactPlayer url='https://www.facebook.com/watch/?v=953781078146961'  width='100%' alt='basketball ad'/>
        
    </div>
  )
}

export default Clip