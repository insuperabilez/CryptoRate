import React from 'react'
import { Link } from 'react-router-dom'
import './Reg.css'
function Reg() {
  return (
    <React.Fragment>
    <div className='container'>
      <div className='auth-page z-depth-2'>
        <h3 style={{paddingTop: '10px'}}> Регистрация</h3>
        <form className='form form-login'>
          <div className='row'>
          <div className="input-field col s12">
            <input type='email' name='email' className='validate'/>
            <label htmlFor='email'>email</label>
          </div>
          
          <div className="input-field col s12">
            <input type='password' name='password' className='validate'/>
            <label htmlFor='password'>Пароль</label>
          </div>
          </div>
          <div className='row'>
          <div className="input-field col s12">
            <button className='wawes-effect wawes-light btn btn-blue'>Зарегистрироваться</button> 
            <Link to='/' className='btn-outline btn-reg'>Уже есть аккаунт?</Link>
          </div>
          </div>
        </form>
      </div>
    </div>
  </React.Fragment>
  )
}

export default Reg
