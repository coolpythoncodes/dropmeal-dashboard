import '../../Sass/ExtrasPopup.scss';
import CloseIcon from '../../assests/cancel.svg'

const ExtrasPopup = ({kitchen, setKitchen,kitchens, close, name,setName,price, setPrice, onSubmit,update,onUpdate }) => {
    return (
        <div className='extras__popup'>
            <div className="extras__popupBox">
                <div className="extras__popupTop">
                    <h1>Add Extra</h1>
                    <img onClick={close} src={CloseIcon} alt="" />
                </div>
                <form onSubmit={(e)=>{ if(update){ onUpdate(e)} else{ onSubmit(e)}}}>
                    <div className="category__name">
                        <label>Category Name</label>
                        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} name="" />
                    </div>
                    <div className="category__name">
                        <label>Price</label>
                        <input type="number" value={price} onChange={(e)=>setPrice(e.target.value)} name="" step="0" min='0' />
                    </div>
                    <div className="category__name">
                        <label>Kitchen</label>
                        <select defaultValue={kitchen} onChange={(e)=>setKitchen(e.target.value)}>
                            <option value="">Choose Kitchen</option>
                            {
                                kitchens.length>0&&
                                    kitchens.map((kitchen,i)=>(
                                    <option value={kitchen.id} key={i} >{kitchen.name}</option>
                                    ))
                            }
                        </select>
                    </div>
                    <button className='upload' type="submit">{update?'Update':'Upload'}</button>
                </form>
            </div>
        </div>
    );
}

export default ExtrasPopup;
