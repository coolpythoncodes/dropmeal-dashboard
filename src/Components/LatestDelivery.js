import { Avatar } from '@material-ui/core';
import '../Sass/LatestDelivery.scss'

const LatestDelivery = ({ name, reference, time, amount}) => {
    return (
        <div className='latest__delivery'>
            <div className="latest__deliveryLeft">
                <Avatar />
                <div style={{
                    marginLeft:'10px'
                }}>
                    <h1>{name}</h1>
                    <small>Ref {reference}</small>
                </div>
            </div>
            <div className="latest__deliveryRight">
                <h1 className='amount'>N {amount}</h1>
                <small>{time}</small>
            </div>
        </div>
    );
}

export default LatestDelivery;
