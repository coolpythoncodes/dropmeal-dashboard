import { Avatar } from '@material-ui/core'
import '../Sass/User.scss'
import EditIcon from '../assests/edit.svg';
import DeleteIcon from '../assests/delete.svg';

const User = () => {
    return (
        <div className='user'>
            <h1>User</h1>
            <div className="user__tableHead">
                <div></div>
                <div>
                    <h2>Email</h2>
                </div>
                <div className='phone__box'>
                    <h2>Phone</h2>
                </div>
                <div className='address__box'>
                    <h2>Address</h2>
                </div>
                <div className='order__box'>
                    <h2>No. Orders</h2>
                </div>
                <div className='edit__box'>
                    <h2>Edit</h2>
                </div>
                <div className='remove__box'>
                    <h2>Delete</h2>
                </div>
            </div>

            <div className="user__tableItem">
                <div>
                    <Avatar />
                </div>
                <div>
                    <p>Delino.ndu@gmail.com</p>
                </div>
                <div className='phone__box'>
                    <p>812434564</p>
                </div>
                <div className='address__box'>
                    <p>32 Hiwssbd...</p>
                </div>
                <div className='order__box'>
                    <p>0</p>
                </div>
                <div className='edit__box' >
                    <img className='edit' src={EditIcon} alt=""/>
                </div>
                <div className='remove__box'>
                    <img className='delete' src={DeleteIcon} alt=""/>
                </div>
            </div>
        </div>
    );
}

export default User;
