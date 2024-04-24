import React from 'react'
import CustomInput from '../components/CustomInput'
const Forgetpassword = () => {
  return (
    <div className='py-5' style={{background:"#ffd700", minHeight:"100vh"}}>
    <div className='my-5 w-25 bg-white rounded-3 mx-auto p-4'>
        <h3 className='text-center title'>Mot de passe oublié</h3>
        <p className='text-center'>Veuillez entrer votre e-mail d'inscription pour recevoir un e-mail de réinitialisation du mot de passe.</p>
      <form action="">
      <CustomInput type="text" label="Email Adress" id="email" />
       
        <button className='border-0 px-3 py-2 text-white fw-bold w-100' style={{background:"#ffd700"}} type='Submit' >Envoyer un lien </button>
      </form>
    </div>
 </div>
  )
}

export default Forgetpassword
