import { useState } from 'react';
import '../Sass/Extras.scss';
import AddIcon from '../assests/add.svg';
import EditIcon from '../assests/edit.svg';
import DeleteIcon from '../assests/delete.svg';
import Layout from './Layout';
import ExtrasPopup from './Popups/ExtrasPopup';
import firebase from "./firebase"
import { connect } from 'react-redux';

const Extras = ({extras,kitchens}) => {

    const [showPopup, setShowPopup] = useState(false);
    const [update, setUpdate] = useState(false)
    const handleClick = () => {
        setShowPopup(!showPopup);
    }


    const [name, setName] = useState('')
    const [kitchen, setKitchen] = useState('')
    const [id, setId] = useState('')
    const [price, setPrice] = useState('')
    const close = () => {
        setShowPopup(!showPopup);
        setUpdate(false)
        setName('')
        setPrice('')
        setId('')
        setKitchen('')
    }
    const onSubmit = (e)=>{
        e.preventDefault()
        if(name==='' || price === '' || kitchen===' '){
            return false
        }
        firebase.addExtra(name,price, kitchen)
        .then(()=>{
            close()
            setUpdate(false)
            setName('')
            setPrice('')
            setId('')
            setKitchen('')
        })
    }
    const onUpdate = (e)=>{
        e.preventDefault()
        if(name==='' || price === '' || kitchen === ''){
            return false
        }
        firebase.updateExtra(id,name,price, kitchen)
        .then(()=>{
            close()
            setUpdate(false)
            setName('')
            setPrice('')
            setId('')
            setKitchen('')
        })
    }
    const onEdit = (data)=>{
        handleClick()
        setName(data.name)
        setPrice(data.amount)
        setId(data.id)
        setKitchen(data.kitchen)
        setUpdate(true)
    }
    const onDelete =(id)=>{
        firebase.deleteExtra(id)
    }
    return (
    <Layout>
        <div className='extras'>
            {
                showPopup && <ExtrasPopup setKitchen={setKitchen} kitchen={kitchen} kitchens={kitchens} onUpdate={onUpdate} update={update} onSubmit={onSubmit} setName={setName} name={name} price={price} setPrice={setPrice} close={close}/>
            }
            <div className="extras__top">
                <div className="extras__topLeft">
                    <h1>Extras</h1>
                </div>
                <div onClick={handleClick} className="extras__topRight">
                    <p>Add New</p>
                    <img src={AddIcon} alt="" />
                </div>
            </div>
            <div className="extras__bottom">
                <div className="table__head">
                    <div></div>
                    <div>
                        <h2>Item Name</h2>
                    </div>
                    <div className='edit__box'>
                        <h2>Price</h2>
                    </div>
                    <div className='edit__box' >
                        <h2>Edit</h2>
                    </div>
                    <div className='remove__box' >
                        <h2>Delete</h2>
                    </div>
                </div>
                {
                    extras.length>0?
                        extras.map((extra,i)=>(
                            <div key={i} className="table__item">
                                <div>
                                </div>
                                <div>
                                    <p>{extra.name}</p>
                                </div>
                                <div className='edit__box'>
                                    <p>N {extra.amount}</p>
                                </div>
                                <div className='edit__box' >
                                    <img onClick={()=>onEdit(extra)} className='edit' src={EditIcon} alt="" />
                                </div>
                                <div className='remove__box'>
                                    <img onClick={()=>onDelete(extra.id)} className='delete' src={DeleteIcon} alt="" />
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
const mapStateToProps =state=>({
    extras:state.extras,
    kitchens:state.kitchens
})
export default connect(mapStateToProps)(Extras);
