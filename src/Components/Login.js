import { useState } from 'react';
import '../Sass/Login.scss';
import Logo from '../assests/Dropsvg2.svg';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';

const Login = () => {

    const [passwordShow, setPasswordShow] = useState(false);

    const changePasswordVisibility = () => {
        setPasswordShow(!passwordShow)
    }

    const getCurrentYear = () => {
        return new Date().getFullYear();
    }

    return (
        <section id='login'>
            <div className='login'>
                <img className='login__logo' src={Logo} alt="" />
                <form action="">
                    <div className="login__email">
                        <PermIdentityIcon style={{ color: '#BCBCBC' }} />
                        <input
                            type="email"
                            placeholder='Email'
                        />
                    </div>

                    <div className="login__password" >
                        <VpnKeyIcon style={{ color: '#BCBCBC' }} />
                        <input
                            type={passwordShow ? "text" : "password"}
                            placeholder='Password'
                        />
                        <span onClick={changePasswordVisibility}>
                            {
                                passwordShow ? <VisibilityOffIcon style={{ color: '#BCBCBC', marginLeft: '1rem' }} /> : <VisibilityIcon style={{ color: '#BCBCBC', marginLeft: '1rem' }} />
                            }
                        </span>
                    </div>
                </form>
            </div>
            <footer>
                <p>&copy; Copyright DropInc {getCurrentYear()}</p>
            </footer>

        </section>
    );
}

export default Login;
