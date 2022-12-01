import React from 'react'
import { Link } from 'react-router-dom'
import './Auth.css'
function Auth() {
  return (
    <React.Fragment>
      <div className='container'>
        <div className='auth-page z-depth-2'>
          <h3 style={{paddingTop: '10px'}}> Авторизация</h3>
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
              <button className='wawes-effect wawes-light btn btn-blue'>Войти</button> 
              <Link to='/' className='btn-outline btn-reg'>Нет аккаунта?</Link>
            </div>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Auth
