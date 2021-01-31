import { Avatar } from '@material-ui/core'
import '../Sass/User.scss'
import EditIcon from '../assests/edit.svg';
import DeleteIcon from '../assests/delete.svg';
import Layout from './Layout';
import { connect } from 'react-redux';
import {maxStringLength} from "../app/helper"

const User = ({users}) => {
    return (
    <Layout>
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

            {
                users.length>0?
                    users.map((user,i)=>(
                        <div key={i} className="user__tableItem">
                        <div>
                            <Avatar />
                        </div>
                        <div>
                            <p>{ maxStringLength(user.email, 15) }</p>
                        </div>
                        <div className='phone__box'>
                            <p>{user.phone}</p>
                        </div>
                        <div className='address__box'>
                            <p>{ user.address&& maxStringLength(user.address, 15)}</p>
                        </div>
                        <div className='order__box'>
                            <p>{user.numOfOrders}</p>
                        </div>
                        <div className='edit__box' >
                            <img className='edit' src={EditIcon} alt=""/>
                        </div>
                        <div className='remove__box'>
                            <img className='delete' src={DeleteIcon} alt=""/>
                        </div>
                    </div>
                    ))
                :
                null
            }
            
        </div>
    </Layout>
    );
}
const mapStateToProps =state=>({
    users:state.users
})
export default connect(mapStateToProps)(User);
