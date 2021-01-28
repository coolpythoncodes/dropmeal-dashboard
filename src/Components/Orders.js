import '../Sass/Orders.scss'
// import OrdersPopup from './OrdersPopup';
import TrackButton from './TrackButton'
import Layout from './Layout';

const Orders = () => {
    return (
    <Layout>
        <div className='orders'>
            {/* <OrdersPopup /> */}
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
            <div className="orders__tableItem">
                <div className='date'>
                    <p>4 hrs ago</p>
                </div>
                <div>
                    <p>delino.ndu@gmail.co</p>
                </div>
                <div>
                    <p>#REF238932478</p>
                </div>
                <div>
                    <p>Rice and Chicken...</p>
                </div>
                <div>
                    <p>N 2034</p>
                </div>
                <div>
                    <p>Wallet</p>
                </div>
                <div className='status'>
                    <p style={{color:'#DA2C38'}}>Processing</p>
                    <TrackButton color='#F18701'/>
                </div>
            </div>

            <div className="orders__tableItem">
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
            </div>
        </div>
    </Layout>
    );
}

export default Orders;
