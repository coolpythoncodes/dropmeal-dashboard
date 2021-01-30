import { useState } from 'react';
import '../../Sass/MealsPopup.scss'
import ImageUploading from 'react-images-uploading';
import ImageUpload from '../../assests/imageUpload.svg';
import CloseIcon from '../../assests/cancel.svg';

const MealsPopup = ({ close }) => {

    // const [isSelected, setIsSelected] = useState(false);
    const [checkedItems, setCheckedItems] = useState({});

    const handleInputChange = (e) => {
        setCheckedItems({ ...checkedItems, [e.target.name]: e.target.checked })
        // const target = e.target
        // setIsSelected(!isSelected)

        // prevState => ({ checkedItems: prevState.checkedItems.set(item, isChecked) }))
    }

    const extras = [
        {
            id: 1,
            name: 'meat',
            label: 'Meat',
            isChecked: false,
        },
        {
            id: 2,
            name: 'stew',
            label: 'Stew',
            isChecked: false,
        },
        {
            id: 3,
            name: 'fish',
            label: 'Fish',
            isChecked: false,
        },
        {
            id: 4,
            name:'stew',
            label: 'Stew',
            isChecked: false,
        },
        {
            id: 5,
            name:'salad',
            label: 'Salad',
            isChecked: false,
        },
        {
            id: 6,
            name: 'pounded-yam',
            label: 'Pounded yam',
            isChecked: false,
        },
        {
            id: 7,
            name: 'plantain',
            label: 'Plantain',
            isChecked: false,
        }
    ]

    return (
        <div className='meals__popup'>
            <div className="meals__popupBox">
                <div className="meals__popupTop">
                    <h2>Add New Category</h2>
                    <img src={CloseIcon} alt="" onClick={close} />
                </div>
                <div className="meals__popupBody">
                    <div className="meals__bodyLeft">
                        <form id='form'>
                            <div className="category__name">
                                <label htmlFor="name">Item name</label>
                                <input type="text" name="" id="name" />
                            </div>

                            <div className="category__name">
                                <label htmlFor="name">Category</label>
                                <input type="text" name="" id="name" />
                            </div>

                            <div className="category__name">
                                <label htmlFor="name">Price</label>
                                <input type="number" name="" id="name" min='0' />
                            </div>

                            <p>Image</p>
                            <div className="category__image">
                                <ImageUploading
                                    multiple
                                    // value={image}
                                    // onChange={onChange}
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
                                                        // style={isDragging ? { color: "red" } : null}

                                                        {...dragProps}
                                                    />

                                            }


                                            &nbsp;
                                            {/* <button onClick={onImageRemoveAll}>Remove all images</button> */}
                                            {imageList.map((image, index) => (
                                                <div key={index} className="image-item">
                                                    <img src={image.data_url} alt="" width="89" />
                                                    <div className="image-item__btn-wrapper">
                                                        {/* <button onClick={() => onImageUpdate(index)}>Update</button> */}
                                                        <button onClick={() => onImageRemove(index)}>Remove</button>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </ImageUploading>
                            </div>
                            {
                                // !update ?
                                <button className='upload' type="submit">Upload</button>
                                // :
                                // <>
                                //     <button className='upload' type="submit">Update</button>
                                //     {/* <button className='upload' onClick={onClear} type="btn">clear</button> */}
                                // </>
                            }
                        </form>
                    </div>
                    <div className="meals__bodyRight">
                        <h2>Extras</h2>
                        <div className="extras__content">
                            <form action="">

                                <div className="extras">
                                    {
                                        extras.map(item => (
                                            <div key={item.id} className={`check-item ${item.isChecked ? 'selected' : null}`} >
                                                <input
                                                    type="checkbox"
                                                    name={item.name}
                                                    id={`option${item.id}`}
                                                    onChange={handleInputChange}
                                                    checked={checkedItems[item.name]}
                                                />
                                                <label htmlFor="option1">{item.label}</label>
                                            </div>
                                        ))
                                    }

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MealsPopup;
