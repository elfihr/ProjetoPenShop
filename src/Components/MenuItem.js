import React from 'react'

const MenuItem = ({image,name,price}) => {
  return (
    <div className='menuItem'>
        <div style={{ backgroundImage: `url(${image})`}}></div>
        <h1>{name}</h1>
        <p> {price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
    </div>
  )
}

export default MenuItem