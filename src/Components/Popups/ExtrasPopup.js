<<<<<<< HEAD:src/Components/Popups/ExtrasPopup.js
import { useState } from 'react';
import ImageUploading from 'react-images-uploading';
import '../../Sass/ExtrasPopup.scss';
import CloseIcon from '../../assests/cancel.svg'
import ImageUpload from '../../assests/imageUpload.svg';
=======
import '../Sass/ExtrasPopup.scss';
import CloseIcon from '../assests/cancel.svg'
>>>>>>> 534a195e47f7f75365b418d4a2f2983fedb075e8:src/Components/ExtrasPopup.js

const ExtrasPopup = ({ close, name,setName,price, setPrice, onSubmit,update,onUpdate }) => {

    return (
        <div className='extras__popup'>
            <div className="extras__popupBox">
                <div className="extras__popupTop">
                    <h1>Add Extra</h1>
                    <img onClick={close} src={CloseIcon} alt="" />
                </div>
                <form onSubmit={(e)=>{ if(update){ onUpdate(e)} else{ onSubmit(e)}}}>
                    <div className="category__name">
                        <label htmlFor="name">Category Name</label>
                        <input value={name} onChange={(e)=>setName(e.target.value)} type="text" name="" id="name" />
                    </div>
                    <div className="category__name">
                        <label htmlFor="name">Price</label>
                        <input type="number" value={price} onChange={(e)=>setPrice(e.target.value)} name="" id="name" step="0" min='0' />
                    </div>
                    <button className='upload' type="submit">{update?'Update':'Upload'}</button>
                </form>
            </div>
        </div>
    );
}

export default ExtrasPopup;
