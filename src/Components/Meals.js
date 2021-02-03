import { useState } from 'react';
import '../Sass/Meals.scss';
import AddIcon from '../assests/add.svg';
import EditIcon from '../assests/edit.svg';
import DeleteIcon from '../assests/delete.svg';
import Layout from './Layout';
import { connect } from 'react-redux';
import MealsPopup from './Popups/MealsPopup';
import firebase from '../Components/firebase'

const Meals = ({meals,extr,categories, kitchens}) => {

    const [showPopup, setShowPopup] = useState(false);
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [detail, setDetail] = useState('');
    const [update, setUpdate] = useState(false);
    const [id, setId] = useState('');
    const [category, setCategory] = useState('');
    const [extra, setExtra] = useState([]);
    const [extras, setExtras] = useState([]);
    const [img, setImg] = useState(false);
    // const [catname, setCatname] = useState('');
    const [checkedItems, setCheckedItems] = useState([]);
    const [kitchenId, setKitchenId] = useState('');
    const [kitchen, setKitchen] = useState('');
    const [image, setImage] = useState(null);
    
    const close = () => {
        setShowPopup(!showPopup)
    }

    const onSetKitchen=(id)=>{
       let name = null
        const extra = extr.filter(item=>item.kitchen === id)
        const kitchenName = kitchens.filter(item=>item.id === id)
        if(kitchenName.length>0){
            name =kitchenName[0].name
            
        }
        setKitchen(name)
        setExtras(extra)
        setKitchenId(id)
        

    }
    const open = () => {
        setName('')
        setPrice('')
        setCheckedItems([])
        setCategory('')
        setKitchenId('')
        setExtras([])
        setExtra([])
        setDetail('')
        setId('')
        setImage(null)
        setUpdate(false)
        setShowPopup(!showPopup)
    }

    const onSubmit = (e)=>{
        e.preventDefault()
        const cat = categories.filter(cate=>cate.id === category)

        if(name === '' || category === '' || price ==='' || kitchen === ''|| kitchenId === '' || detail === '' || image === null){
            return
        }
        
        firebase.addMeals(name,category,price,checkedItems,image[0].file,kitchen, detail, cat[0].name, kitchenId)
        .then(()=>{
            close()
            setCheckedItems([])
            setExtras([])
        })
    }

    const onUpdate = (e)=>{
        e.preventDefault()
        const cat = categories.filter(cate=>cate.id === category)
        // setCatname(cat[0].name)
        if(name === '' || category === '' || price ==='' || kitchen === '' || kitchenId === '' || image === null){
            return
        }
        firebase.updateMeals(id, img, name, category,price,checkedItems,image[0].file,kitchen, detail, cat[0].name, kitchenId)
        .then(()=>{
            close()
            setCheckedItems([])
            setImg(false)
            setExtras([])
        })
    }
    const onDelete = (data)=>{
        firebase.deleteMeal(data.id, data.photoURL)
        .then(()=>{

        })
    }
    const onEdit = (data)=>{
        open()

        setName(data.name)
        setPrice(data.amount)
        setCheckedItems(data.extras)
        setCategory(data.categoryId)
        onSetKitchen(data.kitchenId)
        setDetail(data.details)
        setId(data.id)
        setImage([{data_url:data.photoURL}])
        setUpdate(true)
    }
    return (
        <Layout>
        <div className='meals'>
            {
                showPopup && <MealsPopup kitchens={kitchens} setImg={setImg} onUpdate={onUpdate} checkedItems={checkedItems} setCheckedItems={setCheckedItems} update={update} detail={detail} setDetail={setDetail} categories={categories} price={price} setPrice={setPrice} name={name} setName={setName} category={category} setCategory={setCategory} image={image} setImage={setImage} kitchen={kitchenId} setKitchen={onSetKitchen} extra={extra} setExtra={setExtra}  extras={extras} close={close} onSubmit={onSubmit} />
            }
            <div className="meals__top">
                <div className="meals__topLeft">
                    <h1>Meals</h1>
                </div>
                <div className="meals__topRight" onClick={open} >
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
                                    <p>{meal.category}</p>
                                </div>
                                <div>
                                    <p>N {meal.amount}</p>
                                </div>
                                <div>
                                    <p>Salad, Plantain...</p>
                                </div>
                                <div className='edit__box' >
                                    <img className='edit' onClick={()=>onEdit(meal)} src={EditIcon} alt="" />
                                </div>
                                <div className='remove__box'>
                                    <img className='delete' onClick={()=>onDelete(meal)} src={DeleteIcon} alt="" />
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
    meals:state.meals,
    extr:state.extras,
    categories:state.categories,
    kitchens:state.kitchens
})
export default connect(mapStateToProps)(Meals);
