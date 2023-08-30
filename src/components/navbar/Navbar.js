import React from 'react'
import './Navbar.css'
import hambugger from '../../assest/Vector.png'

const Navbar = () => {
  return (
    <div className='body'>
        <div className='navbar'>
            <div className='nav'>
                <p>
                    LOUNGE CASE KNIFE
                </p>
            </div>
            <div className='bar'>
                <a href='#'> Product</a>
                <a href='#'> Story</a>
                <a href='#'> The features</a>
                <a href='#'> Who we</a>
            </div>
            <div className='hambugger'>
                <img src={hambugger} alt='alt' />
            </div>
        </div>
        <div className='text'>
            <h1><span> Knife</span> Louge Case</h1>
            <p> The case offers safr protection against impact, heat and water, while appropriately <br/> presenting your Grail Knives and favorite pieces like rare or valuable pieces of     jewelry.</p>

            <button className='more'> MORE</button>
        </div>

    </div>
  )
}

export default Navbar