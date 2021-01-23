import { useState } from 'react';
import ImageUploading from 'react-images-uploading';
import '../Sass/Category.scss';

import FishIcon from '../assests/fish.svg';
import EditIcon from '../assests/edit.svg';
import DeleteIcon from '../assests/delete.svg';

import ImageUpload from '../assests/imageUpload.svg';

const Category = () => {
    const [images, setImages] = useState([]);
    const onChange = (imageList, addUpdateIndex) => {
        // data for submit
        console.log(imageList, addUpdateIndex);
        setImages(imageList);
    };

    return (
        <div className='category'>
            <h1>Category</h1>
            <section className='category__main'>
                <div className="category__mainLeft">
                    <div className="table__head">
                        <div></div>
                        <div>
                            <h2>Item Name</h2>
                        </div>
                        <div className='edit__box' >
                            <h2>Edit</h2>
                        </div>
                        <div className='remove__box'>
                            <h2>Delete</h2>
                        </div>
                    </div>
                    
                    <div className="table__item">
                        <div>
                            <img className='food__image'  src={FishIcon} alt="" />
                        </div>
                        <div>
                            <p>Ice-cream</p>
                        </div>
                        <div className='edit__box'>
                            <img className='edit' src={EditIcon} alt=""/>
                        </div>
                        <div className='remove__box'>
                            <img className='delete' src={DeleteIcon} alt=""/>
                        </div>
                    </div>

                    <div className="table__item">
                        <div>
                            <img className='food__image'  src={FishIcon} alt="" />
                        </div>
                        <div>
                            <p>Ice-cream</p>
                        </div>
                        <div className='edit__box'>
                            <img className='edit' src={EditIcon} alt=""/>
                        </div>
                        <div className='remove__box'>
                            <img className='delete' src={DeleteIcon} alt=""/>
                        </div>
                    </div>

                    <div className="table__item">
                        <div>
                            <img className='food__image'  src={FishIcon} alt="" />
                        </div>
                        <div>
                            <p>Ice-cream</p>
                        </div>
                        <div className='edit__box'>
                            <img className='edit' src={EditIcon} alt=""/>
                        </div>
                        <div className='remove__box'>
                            <img className='delete' src={DeleteIcon} alt=""/>
                        </div>
                    </div>

                    <div className="table__item">
                        <div>
                            <img className='food__image'  src={FishIcon} alt="" />
                        </div>
                        <div>
                            <p>Ice-cream</p>
                        </div>
                        <div className='edit__box'>
                            <img className='edit' src={EditIcon} alt=""/>
                        </div>
                        <div className='remove__box'>
                            <img className='delete' src={DeleteIcon} alt=""/>
                        </div>
                    </div>

                    <div className="table__item">
                        <div>
                            <img className='food__image'  src={FishIcon} alt="" />
                        </div>
                        <div>
                            <p>Ice-cream</p>
                        </div>
                        <div className='edit__box'>
                            <img className='edit' src={EditIcon} alt=""/>
                        </div>
                        <div className='remove__box'>
                            <img className='delete' src={DeleteIcon} alt=""/>
                        </div>
                    </div>

                    <div className="table__item">
                        <div>
                            <img className='food__image' src={FishIcon} alt="" />
                        </div>
                        <div>
                            <p>Ice-cream</p>
                        </div>
                        <div className='edit__box'>
                            <img className='edit' src={EditIcon} alt=""/>
                        </div>
                        <div className='remove__box'>
                            <img className='delete' src={DeleteIcon} alt=""/>
                        </div>
                    </div>

                    <div className="table__item">
                        <div>
                            <img className='food__image'  src={FishIcon} alt="" />
                        </div>
                        <div>
                            <p>Ice-cream</p>
                        </div>
                        <div className='edit__box'>
                            <img className='edit' src={EditIcon} alt=""/>
                        </div>
                        <div className='remove__box'>
                            <img className='delete' src={DeleteIcon} alt=""/>
                        </div>
                    </div>


                    {/* <table>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Item Name</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Ice-cream</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>

                        </tbody> 
                    </table> */}
                </div>
                <div className="category__mainRight">
                    <div className="right__content">
                        <h1>Add New Category</h1>
                        <form >
                            <div className="category__name">
                                <label htmlFor="name">Category Name</label>
                                <input type="text" name="" id="name" />
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
            </section>
        </div>
    );
}

export default Category;
