import React from 'react'
import '../Styles/Home.css'
import { Link } from 'react-router-dom'
import penBackground from '../assets/penBackground.jpg'

const Home = () => {
  return (
    <div className='home' style={{ backgroundImage: `url(${penBackground})`}}>
      <div className='home-Container' > 
        <h1>Fihr Pen Shop</h1>
        <p>Write your story with the best pen</p>
        <Link to='/menu'><button>Conheça</button></Link>
        
      </div>
    </div>
  )
}

export default Home