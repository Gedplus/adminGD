import React from 'react'
import CustomInput from '../components/CustomInput'
const Resetpassword = () => {
  return (
    <div className='py-5' style={{background:"#ffd700", minHeight:"100vh"}}>
    <div className='my-5 w-25 bg-white rounded-3 mx-auto p-4'>
        <h3 className='text-center title'>Réinitialiser le mot de passe</h3>
        <p className='text-center'>Veuillez entrer votre nouveau mot de passe.</p>
      <form action="">
  
        <CustomInput type="password" label="nouveau mot de passe" id="pass" />
        
        <CustomInput type="password" label="Confirmez le mot de passe" id="confirmpass" />
        <button className='border-0 px-3 py-2 text-white fw-bold w-100' style={{background:"#ffd700"}} type='Submit' >réinitialiser le mot de passe</button>
      </form>
    </div>
 </div>
  )
}

export default Resetpassword
