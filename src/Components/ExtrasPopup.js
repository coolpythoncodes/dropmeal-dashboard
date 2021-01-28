import { useState } from 'react';
import ImageUploading from 'react-images-uploading';
import '../Sass/ExtrasPopup.scss';
import CloseIcon from '../assests/cancel.svg'
import ImageUpload from '../assests/imageUpload.svg';

const ExtrasPopup = () => {

    const [images, setImages] = useState([]);
    const onChange = (imageList, addUpdateIndex) => {
        // data for submit
        console.log(imageList, addUpdateIndex);
        setImages(imageList);
    };
    return (
        <div className='extras__popup'>
            <div className="extras__popupBox">
                <div className="extras__popupTop">
                    <h1>Add Extra</h1>
                    <img src={CloseIcon} alt="" />
                </div>
                <form >
                    <div className="category__name">
                        <label htmlFor="name">Category Name</label>
                        <input type="text" name="" id="name" />
                    </div>
                    <div className="category__name">
                        <label htmlFor="name">Price</label>
                        <input type="number" name="" id="name" step="0" min='0' />
                    </div>

                    <p>Image</p>
                    <div className="category__image">
                        <ImageUploading
                            multiple
                            value={images}
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
                                                // style={isDragging ? { color: "red" } : null}
                                                onClick={onImageUpload}
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
                    <button className='upload' type="submit">Upload</button>
                </form>
            </div>
        </div>
    );
}

export default ExtrasPopup;
