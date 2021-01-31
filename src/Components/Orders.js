import { useState } from 'react';
import '../Sass/Orders.scss';
import OrdersPopup from './Popups/OrdersPopup';
import TrackButton from './TrackButton';
import Layout from './Layout';
import { connect } from 'react-redux';
import { maxStringLength, moment } from '../app/helper';

const Orders = ({orders}) => {

    const [showPopup, setShowPopup] = useState(false);

    const openPopup = () => {
        setShowPopup(!showPopup);
    }

    const closePopup = () => {
        setShowPopup(!showPopup);
    }

    return (
    <Layout>
        <div className='orders'>
            {
                showPopup && <OrdersPopup closePopup={closePopup} />
            }
            <h1>Orders</h1>
            <div className="orders__tableHead">
                <div className='date'>
                    <h2>Date</h2>
                </div>
                <div>
                    <h2>Placed by</h2>
                </div>
                <div>
                    <h2>Ref Number</h2>
                </div>
                <div>
                    <h2>Item</h2>
                </div>
                <div>
                    <h2>Cost</h2>
                </div>
                <div>
                    <h2>Paid with</h2>
                </div>
                <div>
                    <h2>Status</h2>
                </div>
            </div>
            {
                orders.length>0?
                    orders.map((order,i)=>(
                        <div key={i} className="orders__tableItem">
                        <div className='date'>
                            <p>{moment(order.createdAt)}</p>
                        </div>
                        <div>
                            <p>{order.customerEmail && maxStringLength(order.customerEmail, 15)}</p>
                        </div>
                        <div>
                            <p>#REF{order.ref}</p>
                        </div>
                        <div>
                            <p>{maxStringLength(order.meals[0].name,15)}</p>
                        </div>
                        <div>
                            <p>N {(order.delivery+order.totalAmount+order.vat).toFixed(2)}</p>
                        </div>
                        <div>
                            <p>{order.wallet?'Wallet':'Paystack'}</p>
                        </div>
                        <div className='status'>
                            <p style={{color: order.status === 'processing'?'#DA2C38':(order.status === 'pickup'?'blue':'#40AB03'), textTransform:'capitalize'}}>{order.status}</p>
                            {
                                order.status === 'processing'?
                                <TrackButton openPopup={openPopup} color='#F18701'/>
                                :
                                <TrackButton color='#E6B67A'/>
                            }
                        </div>
                    </div>
                    ))
                :
                null
            }

            {/* <div className="orders__tableItem">
                <div className='date'>
                    <p>31-12-202</p>
                </div>
                <div>
                    <p>belloray@gmail.com</p>
                </div>
                <div>
                    <p>#REF238932433</p>
                </div>
                <div>
                    <p>Ice cream, Burger</p>
                </div>
                <div>
                    <p>N 3456</p>
                </div>
                <div>
                    <p>Paystack</p>
                </div>
                <div className='status' >
                    <p style={{color:'#40AB03'}}>Delivered</p>
                    <TrackButton color='#E6B67A'/>
                </div>
            </div> */}
        </div>
    </Layout>
    );
}
const mapStateToProps = state=>({
    orders:state.orders
})
export default connect(mapStateToProps)(Orders);
