import '../../Sass/OrdersPopup.scss';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import firebase from "../../Components/firebase"
import { useState } from 'react';

const OrdersPopup = ({ closePopup ,mobile, customerEmail, refs, amount, meals,wallet, status, dispatchers}) => {
    const [dispatch, setDispatch] = useState('')
    const [pickup, setPickup] = useState('')
    const onProcess =()=>{
        if(dispatch === ''|| pickup ===''){
            return
        }
        firebase.processOrder(refs.toString(), dispatch, pickup)
        .then(()=>{
            closePopup()
        })
    }
    return (
        <div className='orders__popup'>
            <div className="orders__popupBox">
                <div className="orders__popupTop">
                    <h4>{customerEmail}</h4>
                    <button className='track-button'>Track Order</button>
                </div>
                <div className="orders__popupTracking">
                    <div >
                        <div>
                            <div>
                                <h5>Ref. Number</h5>
                            </div>
                            <div>
                                <p>#REF{refs}</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div>
                                <h5>Total Amount</h5>
                            </div>
                            <div>
                                <p>N {amount}</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div>
                                <h5>Mobile</h5>
                            </div>
                            <div>
                                <p>{mobile}</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div>
                                <h5>Paid with</h5>
                            </div>
                            <div>
                                <p>{wallet?'Wallet':'Paystack'}</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div>
                                <h5>Status</h5>
                            </div>
                            <div>
                                <p style={{ color: "#DA2C38" }}>{status}</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="meals">
                            <div>
                            <h5>Qty</h5>
                            </div>
                            <div>
                                <h5>Meal</h5>
                            </div>
                            <div>
                                <h5>Amount</h5>
                            </div>
                        </div>
                    </div>
                    {
                        meals.length>0?
                            meals.map((meal, i)=>(
                                <div  key={i}>
                                    <div>
                                        <div>
                                        <p>{meal.numberOfMeals}</p>
                                        </div>
                                        <div>
                                            <p>{meal.name}</p>
                                        </div>
                                        <div>
                                            <p>{meal.amount}</p>
                                        </div>
                                     </div>   
                                     {
                                         meal.extras.length>0?
                                            <>
                                            <h5>Extras</h5>
                                            {
                                                meal.extras.map((extra,i)=>(
                                                    <div key={i}>                                                  <div>
                                                            <p style={{color:'#0E89F0'}}>{extra.name}</p>
                                                        </div>
                                                        <div>
                                                            <p style={{color:'#0E89F0'}}>{extra.amount}</p>
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                            </>
                                         :
                                         null
                                     }
                                </div>
                            ))
                        :null
                    }
                   

                </div>
                <div>
                    <p>Pick Up Location</p>
                </div>
                <textarea onChange={(e)=>setPickup(e.target.value)}/>
                <div>
                    <p>Dispatcher</p>
                </div>
                <select onChange={(e)=>setDispatch(e.target.value)}>
                    <option value="">Choose Dispatcher</option>
                    {
                        dispatchers.length>0?
                            dispatchers.map((dispatcher, i)=>(
                                <option key={i} value={dispatcher.id}>{dispatcher.fullname}</option>
                            ))
                        :
                        null
                    }
                </select>
                {/* <div className="orders__popupExtras">
                    <h2>Extras</h2>
                    <div className="extra__items">
                        <p>Pounding yam</p>
                        <p>Fish</p>
                    </div>
                </div> */}

                <div className="buttons">
                <button onClick={closePopup} type="button" className="back-button">
                    <ArrowBackIosIcon style={{ fontSize: 15, color: "#0E89F0", marginRight: "0.5rem" }} />
                    <p>Back to order</p>
                </button>
                <button onClick={onProcess} style={{borderColor:'#40AB03'}} type="button" className="back-button">
                    <p style={{color:'#40AB03'}}>Process Order</p>
                    <ArrowForwardIosIcon style={{ fontSize: 15, color: "#40AB03", marginLeft: "0.5rem" }} />
                </button>
                </div>
            </div>
        </div>
    );
}

export default OrdersPopup;
