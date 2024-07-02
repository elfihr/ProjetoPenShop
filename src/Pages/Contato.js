import React from 'react'
import '../Styles/Contato.css'
import penShop from '../assets/penShop.png'

function Contato () {
  return (
    <div className='contact'>
        <div className='leftSide'  style={{ backgroundImage: `url(${penShop})`}}>

        </div>
        <div className='rightSide'>
            <h1>Contato</h1>
            <form id='contact-form' method='POST'>
                <label htmlFor='name'>Nome Completo</label>
                <input name='name' placeholder='Digite seu nome completo' type='text' required/>
                <label htmlFor='email'>E-mail</label>
                <input name='email' placeholder='Digite seu e-mail' type='text'/>
                <label htmlFor='message'>Mensagem</label>
                <textarea rows={6} placeholder='Digite a mensagem' name='message' required></textarea>
                <button type='submit'>Enviar Mensagem</button>
            </form>
        </div>
    </div>
  )
}

export default Contato