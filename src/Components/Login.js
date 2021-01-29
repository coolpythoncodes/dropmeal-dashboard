import { useState } from 'react';
import '../Sass/Login.scss';
import Logo from '../assests/Dropsvg2.svg';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import firebase from "../Components/firebase"

const Login = () => {

    const [passwordShow, setPasswordShow] = useState(false);
    const [email, setEmail]= useState('')
    const [password, setPassword] = useState('')
    const changePasswordVisibility = () => {
        setPasswordShow(!passwordShow)
    }

    const getCurrentYear = () => {
        return new Date().getFullYear();
    }

    const onSubmit = (e)=>{
        e.preventDefault();
        firebase.login(email, password)
        .then(()=>{

        })
        .catch(e=>{

        })
    }

    return (
        <section id='login'>
            <div className='login'>
                <img className='login__logo' src={Logo} alt="" />
                <form onSubmit={onSubmit}>
                    <div className="login__email">
                        <PermIdentityIcon style={{ color: '#BCBCBC' }} />
                        <input
                            type="email"
                            placeholder='Email'
                            onChange={(e)=>setEmail(e.target.value)}
                        />
                    </div>

                    <div className="login__password" >
                        <VpnKeyIcon style={{ color: '#BCBCBC' }} />
                        <input
                            type={passwordShow ? "text" : "password"}
                            placeholder='Password'
                            onChange={(e)=>setPassword(e.target.value)}
                        />
                        <span onClick={changePasswordVisibility}>
                            {
                                passwordShow ? <VisibilityOffIcon style={{ color: '#BCBCBC', marginLeft: '1rem' }} /> : <VisibilityIcon style={{ color: '#BCBCBC', marginLeft: '1rem' }} />
                            }
                        </span>
                    </div>
                    <button type='submit'>Login</button>
                </form>
            </div>
            <footer>
                <p>&copy; Copyright DropInc {getCurrentYear()}</p>
            </footer>

        </section>
    );
}

export default Login;
