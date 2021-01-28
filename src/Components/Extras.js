import '../Sass/Extras.scss';
import AddIcon from '../assests/add.svg';
import FishIcon from '../assests/fish.svg';
import EditIcon from '../assests/edit.svg';
import DeleteIcon from '../assests/delete.svg';
import ExtrasPopup from './ExtrasPopup';

const Extras = () => {
    return (
        <div className='extras'>
            <ExtrasPopup />
            <div className="extras__top">
                <div className="extras__topLeft">
                    <h1>Extras</h1>
                </div>
                <div className="extras__topRight">
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
                <div className="table__item">
                    <div>
                        <img className='food__image' src={FishIcon} alt="" />
                    </div>
                    <div>
                        <p>Plantain</p>
                    </div>
                    <div className='edit__box'>
                        <p>N 600</p>
                    </div>
                    <div className='edit__box' >
                        <img className='edit' src={EditIcon} alt="" />
                    </div>
                    <div className='remove__box'>
                        <img className='delete' src={DeleteIcon} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Extras;
