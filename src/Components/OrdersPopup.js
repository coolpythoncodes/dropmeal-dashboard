import '../Sass/OrdersPopup.scss';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const OrdersPopup = () => {
    return (
        <div className='orders__popup'>
            <div className="orders__popupBox">
                <div className="orders__popupTop">
                    <h4>Delino.ndu@gmail.com</h4>
                    <button className='track-button'>Track Order</button>
                </div>
                <div className="orders__popupTracking">
                    <div>
                        <h5>Ref. Number</h5>
                    </div>
                    <div>
                        <p>#REF3284398743</p>
                    </div>
                    <div>
                        <h5>Price</h5>
                    </div>
                    <div>
                        <p>N 2034</p>
                    </div>
                    <div>
                        <h5>Item Name</h5>
                    </div>
                    <div>
                        <p>Egusi Soup</p>
                    </div>
                    <div>
                        <h5>Paid with</h5>
                    </div>
                    <div>
                        <p>Wallet</p>
                    </div>
                    <div>
                        <h5>Status</h5>
                    </div>
                    <div>
                        <p style={{ color: "#DA2C38" }}>Processing</p>
                    </div>
                </div>
                <div className="orders__popupExtras">
                    <h2>Extras</h2>
                    <div className="extra__items">
                        <p>Pounding yam</p>
                        <p>Fish</p>
                    </div>
                </div>

                <button className="back-button">
                    <ArrowBackIosIcon style={{ fontSize: 15, color: "#0E89F0", marginRight: "0.5rem" }} />
                    <p>Back to order</p>
                </button>
            </div>
        </div>
    );
}

export default OrdersPopup;
