import React, { useState } from 'react'
import NavLogin from './NavLogin'
import './login.scss'
import { useDispatch } from 'react-redux'
import {  startRegisterWithEmailAndPassword } from '../../actions/authAction'
import { Link } from 'react-router-dom'


const Register = () => {
    
    const dispatch = useDispatch()

    const [formValue, setformValue] = useState({
        email:'',
        password:''
    });

    const [error, setError] = useState(false)


    const {email,password}= formValue;

    const handleOnchangeRegister=e=>{
        setformValue({
            ...formValue,
            [e.target.name ]: e.target.value
        })
    }

    const handleSubmitRegister = e=>{
        e.preventDefault()

        if(email===''||password===''){
            console.log('no paso la validacion')
            setError(true);
            setTimeout(() => {
            setError(false)
            }, 2000);
            return;
        }
        
        
        dispatch( startRegisterWithEmailAndPassword(email,password) )
        
    }


    return (
        <>
        <NavLogin/>
        <div className='container-register' >
            <div className='form-login'>
            <form
              onSubmit={handleSubmitRegister}  
            >
                {
                    (error) ? <div className='alert alert-danger text-center' >ambos campos son obligatorios</div> :null
                }
                <h2>Regístrate</h2>
                <hr
                />
                <div className="mb-3">
                    <label  className="form-label">Usuario</label>
                    <input 
                        type="email" 
                        className="form-control"
                        placeholder='email@correo.com'
                        name='email'
                        value={email}
                        onChange={  handleOnchangeRegister}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input 
                        type="password" 
                        className="form-control"
                        placeholder='******'
                        name='password'
                        value={password}
                        onChange={  handleOnchangeRegister}
                    />
                </div>

                <button
                    type='submit'
                    className='btn btn-waco'
                >Registrarse</button>

            <Link className='links' to='/auth/login'>Regresar al Menu principal </Link>
            </form>
            </div>

            <div>
            
            </div>
        </div>
        
        </>
    )
}

export default Register
