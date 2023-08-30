import React from 'react'
import './Details.css'
import louis from '../../assest/louis.jpg'
import bask from '../../assest/bask.jpg'

const Details = () => {
  return (
    <div className='detail'> 
      <div className='btn'>
        <button> BUY</button>
      </div>
      <div className='hero'>
        <div className='image'>
        <img src={louis} />
        </div>
        <div className='test'>
          <h1>
            Anthracite Case
          </h1>
          <p>
           <b> Outer dimensions: </b> <br/>
            L x W x H 40 x 30 x 16,8cm <br/>
            (13.7"x9.02"x5.9")
          </p>
          <p>
            <b>Interior dimensions: </b><br/>
            L x W x H 34,8 x 22,9 x 15cm <br/>
            (13.7"x9.02"x5.9")
          </p>
          <p>
            <b>Weight: </b><br/>
              1,98kg (4.36 lbs) <br/>
            890 $ <br/>
            <button>BUY</button>
          </p>

        </div>
      </div>

      <div className='hero'> 
        <div className='test1'>
          <h1>
            Anthracite Case
          </h1>
          <p>
           <b> Outer dimensions: </b> <br/>
            L x W x H 40 x 30 x 16,8cm <br/>
            (13.7"x9.02"x5.9")
          </p>
          <p>
            <b>Interior dimensions: </b><br/>
            L x W x H 34,8 x 22,9 x 15cm <br/>
            (13.7"x9.02"x5.9")
          </p>
          <p>
            <b>Weight: </b><br/>
              1,98kg (4.36 lbs) <br/>
            890 $ <br/>
            <button>BUY</button>
          </p>
        
        </div>
        <div className='image1'>
        <img src={bask} />
        </div>
      </div>
    </div>
  )
}

export default Details