import '../Sass/Meals.scss';
import AddIcon from '../assests/add.svg';
import EditIcon from '../assests/edit.svg';
import DeleteIcon from '../assests/delete.svg';
import Layout from './Layout';
<<<<<<< HEAD
import MealsPopup from './Popups/MealsPopup';
=======
import { connect } from 'react-redux';
>>>>>>> 534a195e47f7f75365b418d4a2f2983fedb075e8

const Meals = ({meals}) => {
    return (
        <Layout>
        <div className='meals'>
            <MealsPopup />
            <div className="meals__top">
                <div className="meals__topLeft">
                    <h1>Meals</h1>
                </div>
                <div className="meals__topRight">
                    <p>Add New</p>
                    <img src={AddIcon} alt="" />
                </div>
            </div>
            <div className="meals__bottom">
                <div className="table__head">
                    <div></div>
                    <div>
                        <h2>Item Name</h2>
                    </div>
                    <div>
                        <h2>Category</h2>
                    </div>
                    <div>
                        <h2>Price</h2>
                    </div>
                    <div>
                        <h2>Extras</h2>
                    </div>
                    <div className='edit__box' >
                        <h2>Edit</h2>
                    </div>
                    <div className='remove__box' >
                        <h2>Delete</h2>
                    </div>
                </div>
                {
                    meals.length>0?
                        meals.map((meal,i)=>(
                            <div key={i} className="table__item">
                                <div>
                                    <img className='food__image' src={meal.photoURL} alt="" />
                                </div>
                                <div>
                                    <p>{meal.name}</p>
                                </div>
                                <div>
                                    <p>Ice Cream</p>
                                </div>
                                <div>
                                    <p>N {meal.amount}</p>
                                </div>
                                <div>
                                    <p>Salad, Plantain...</p>
                                </div>
                                <div className='edit__box' >
                                    <img className='edit' src={EditIcon} alt="" />
                                </div>
                                <div className='remove__box'>
                                    <img className='delete' src={DeleteIcon} alt="" />
                                </div>
                            </div>
                        ))
                    :
                    null
                }
            </div>
        </div>
        </Layout>
    );
}
const mapStateToProps = state=>({
    meals:state.meals
})
export default connect(mapStateToProps)(Meals);
