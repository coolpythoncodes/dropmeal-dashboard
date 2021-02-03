import { useEffect } from 'react';
import '../../Sass/MealsPopup.scss'
import ImageUploading from 'react-images-uploading';
import ImageUpload from '../../assests/imageUpload.svg';
import CloseIcon from '../../assests/cancel.svg';

const MealsPopup = ({kitchens,setImg,onUpdate, checkedItems, setCheckedItems, detail, setDetail,categories, close,extras, onSubmit, name, setName, category, setCategory, kitchen, setKitchen, image, setImage, extra, setExtra,price, setPrice,update }) => {

    // const [isSelected, setIsSelected] = useState(false);

    const onChange = (imageList, addUpdateIndex) => {
        if(update){
            setImg(true)
        }
        else{
            setImg(false)
        }
        setImage(imageList);
    };
    const handleInputChange = (e,i) => {
        setCheckedItems([ ...checkedItems,  extra[i] ])
        // const target = e.target
        // setIsSelected(!isSelected)
        if(!e.target.checked){
           const newExtras = checkedItems.filter(item=>item.name.replace(/ /g, '-').toLowerCase() !== e.target.name)
           setCheckedItems(newExtras)
        }
        extra[i].isChecked = !extra[i].isChecked
        setExtra(extra)
        // prevState => ({ checkedItems: prevState.checkedItems.set(item, isChecked) }))
    }

    useEffect(()=>{
        setExtra(extras)
    },[setExtra,extras])

    return (
        <div className='meals__popup'>
            <div className="meals__popupBox">
                <div className="meals__popupTop">
                    <h2>{update?'Update':'Add New'} Meal</h2>
                    <img src={CloseIcon} alt="" onClick={close} />
                </div>
                <form onSubmit={(e)=>{ if(update){ onUpdate(e)} else{ onSubmit(e)}}} className="meals__popupBody">
                    <div id='form' className="meals__bodyLeft">
                        <div>
                        <p>Image</p>
                            <div className="category__image">
                                <ImageUploading
                                    multiple
                                    value={image}
                                    onChange={onChange}
                                    dataURLKey="data_url"
                                >
                                    {({
                                        imageList,
                                        onImageUpload,
                                        onImageRemoveAll,
                                        onImageUpdate,
                                        onImageRemove,
                                        // isDragging,
                                        dragProps
                                    }) => (
                                        // write your building UI
                                        <div className="upload__image-wrapper">
                                            {
                                                imageList.length > 0 ? null :

                                                    <img
                                                        src={ImageUpload}
                                                        alt=''
                                                        width="100%" height="100%"
                                                        // style={isDragging ? { color: "red" } : null}
                                                        onClick={onImageUpload}
                                                        {...dragProps}
                                                    />

                                            }


                                            &nbsp;
                                            {/* <button onClick={onImageRemoveAll}>Remove all images</button> */}
                                            {imageList.map((image, index) => (
                                                <div key={index} className="image-item">
                                                    <img src={image.data_url} alt="" width="100%" height="100%" />
                                                    <div className="image-item__btn-wrapper">
                                                        {/* <button onClick={() => onImageUpdate(index)}>Update</button> */}
                                                        <img src={CloseIcon} alt="" onClick={() => onImageRemove(index)}/>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </ImageUploading>
                            </div>
                            <div className="category__name">
                                <label htmlFor="name">Item name</label>
                                <input type="text" value={name} onChange={(e)=>setName(e.target.value)} name="" id="name" />
                            </div>

                            <div className="category__name">
                                <label htmlFor="category">Category</label>
                                <select name="category" value={category} onChange={(e)=>setCategory(e.target.value)}>
                                    <option value=''>Choose Category</option>
                                    {
                                        categories.length>0?
                                            categories.map((cat,i)=>{
                                                return(
                                                <option key={i}  value ={cat.id}>{cat.name}</option>
                                            )})
                                        :
                                        null
                                    }
                                    
                                </select>
                            </div>

                            <div className="category__name">
                                <label htmlFor="price">Price</label>
                                <input type="number" value={price} onChange={e=>setPrice(e.target.value)} name="price" id="price" min='0' />
                            </div>
                            <div className="category__name">
                                <label htmlFor="kitchen">Kitchen</label>
                                <select defaultValue={kitchen}  name="kitchen" id="kitchen" onChange={(e)=>setKitchen(e.target.value)}>
                                    <option value="">Choose Kitchen</option>
                                    {
                                        kitchens.length>0&&
                                        kitchens.map((kitchen,i)=>(
                                        <option value={kitchen.id} key={i}>{kitchen.name}</option>
                                        ))
                                    }
                                </select>
                            </div>
                            <div className="category__name">
                                <label htmlFor="detail">Details</label>
                                <textarea type="text" value={detail} onChange={(e)=>setDetail(e.target.value)} name="detail" id="detail" />
                            </div>


                        </div>
                    </div>
                    <div className="meals__bodyRight">
                        <h2>Extras</h2>
                        <div className="extras__content">

                                <div className="extras">
                                    {
                                        extras.map((item,i) => {
                                            return(
                                            <label htmlFor={`option${item.id}`} key={item.id} className={`check-item ${item.isChecked ? 'selected' : ''}`} >
                                                <input
                                                    type="checkbox"
                                                    name={item.name.replace(/ /g, '-').toLowerCase()}
                                                    id={`option${item.id}`}
                                                    onChange={(e)=>handleInputChange(e,i )}
                                                    checked={checkedItems[item.name]}
                                                />
                                                {item.name}
                                            </label>
                                        )})
                                    }

                                </div>
                        </div>
                    </div>
                    <button className='upload' type="submit">{update?'Update':'Upload'}</button>
                </form>
            </div>
        </div>
    );
}

export default MealsPopup;
