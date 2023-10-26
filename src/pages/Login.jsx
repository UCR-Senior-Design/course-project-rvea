import { useState } from 'react'
import './Login.css'
import banner from '../images/ucr-banner.png'

/* Extra Features
    ** Incorrect Email or Password Check?
    1) Email already exists in db alert when trying to register
    2) Forgot Password?
    3) CSS Prettying [see Login.css for more info]
*/

function Login() {
    //State Hooks
    const [title, setTitle] = useState('Login');
    const [buttonName, setButtonName] = useState('Sign In');

    //Event Handlers
    function handleFormSubmit() {
        if (title != 'Login') { handleReset(); }
    }
    function handleRegister() {
        setTitle('Register');
        setButtonName('Sign Up');
    }
    function handleReset() {
        setTitle('Login');
        setButtonName('Sign In');
    }


    return (
        <>
            <div className='image'>
                <a href='#' onClick={() => handleReset()}><img src={banner}></img></a>
            </div>
            <section>
                <div className='login-container'>
                    <div className='login-title'>
                        <h1>{title}</h1>
                    </div>

                    <div className='login-contents'>
                        <form>
                            <div className='input-boxes'>
                                <input name='email' type='text' placeholder='Email' required></input>   
                            </div>
                            <div className='input-boxes'>
                                <input name='pwd' type='password' placeholder='Password' required></input>
                            </div>
                            <button className='login-submit' onSubmit={() => handleFormSubmit()}>{buttonName}</button>
                            {title === 'Login'? <p className='register'>Don&apos;t have an account?&nbsp;<a href='#' onClick={()=>handleRegister()}>Register</a></p> : <p></p>}
                        </form>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Login