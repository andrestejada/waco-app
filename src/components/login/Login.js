import React, { useState } from 'react'
import NavLogin from './NavLogin'
import './login.scss'
import { useDispatch } from 'react-redux'
import { authWithEmailAndPassword } from '../../actions/authAction'
import { Link } from 'react-router-dom'


const Login = () => {
    
    const dispatch = useDispatch()

    const [formValue, setformValue] = useState({
        email:'',
        password:''
    })

    const [error, setError] = useState(false)

    const {email,password}= formValue;

    const handleOnchangeLogin=e=>{
        setformValue({
            ...formValue,
            [e.target.name ]: e.target.value
        })
    }

    const handleSubimitLogin = e=>{
        e.preventDefault()

        if(email===''||password===''){
          setError(true);
          setTimeout(() => {
            setError(false)
          }, 2000);
          return
        }
        
        dispatch( authWithEmailAndPassword(email,password) )
    }


    return (
        <>
        <NavLogin/>
        <div className='login-container' >
            <div className="card-login" >
                <img src={'https://wacoservices.com/wp-content/uploads/2017/03/foto-testimonio.png'} className="card-img-top" alt="imagen"/>
                <div className="card-body">
                    <h5 className="card-title">Quieres conocer mas de nosotros?</h5>
                    <p className="card-text">WACO viene de nuestro mantra – Trabajo y Colaboración. Somos una agencia digital fundada por soñadores, por personas como tú que entiende que el éxito es ser feliz.Creemos en el poder de la colaboración y nos conecta una comunidad de personas con las que probamos que #JuntosLogramosMás.</p>
                    <a href={'https://wacoservices.com/'} className='btn btn-waco' > Conocenos</a>
                </div>
            </div>

            <div className='form-login'>
            <form
              onSubmit={handleSubimitLogin}  
              >
                {
                    (error) ? <div className='alert alert-danger text-center' >ambos campos son obligatorios</div> :null
                }
                <h2> Inicio de Seccion</h2>
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
                        onChange={  handleOnchangeLogin}
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
                        onChange={  handleOnchangeLogin}
                    />
                </div>

                <button
                    type='submit'
                    className='btn btn-waco'
                >Iniciar Seccion </button>
                <Link className='links' to='/auth/register' >Registrarse</Link>
            </form>
            </div>

            <div>
            
            </div>
        </div>
        
        </>
    )
}

export default Login
