import './Login.css'
import banner from '../images/ucr-banner.png'

function Login() {

    function handleSignin() {
        alert('signin pressed');
    }
    function handleRegister() {
        alert('register clicked');
    }

    //State Hooks for register and sign in?

    return (
        <>
            <div className='image'>
                <a href='#'><img src={banner}></img></a>
            </div>
            <section>
                <div className='login-container'>
                    <div className='login-title'>
                        <h1>Login</h1>
                    </div>

                    <div className='login-contents'>
                        <form>
                            <div className='input-boxes'>
                                <input name='email' type='text' placeholder='Email' required></input>   
                            </div>
                            <div className='input-boxes'>
                                <input name='pwd' type='password' placeholder='Password' required></input>
                            </div>
                            <button className='login-submit' onClick={() => handleSignin()}>Sign In</button>
                            <p className='register'>Don&apos;t have an account?&nbsp;<a href='#' onClick={()=>handleRegister()}>Register</a></p>
                        </form>
                    </div>

                </div>
            </section>
        </>

    )
}

export default Login