import React, { useState } from 'react';

const EditProduct = ({ editedObj, saveChanges }) => {
    const [ editedProduct, setEditedProduct ] = useState(editedObj)

    function editTitle (e) {
        setEditedProduct({
            ...editedProduct,
            title: e.target.value
        })
    }

    function editImage (e) {
        setEditedProduct({
            ...editedProduct,
            image: e.target.value
        })
    }

    function editPrice (e) {
        setEditedProduct({
            ...editedProduct,
            price: e.target.value
        })
    }

    function editDesc (e) {
        setEditedProduct({
            ...editedProduct,
            desc: e.target.value
        })
    }

    function editYear (e) {
        setEditedProduct({
            ...editedProduct,
            year: e.target.value
        })
    }
    function handleSaveChanges () {
        saveChanges(editedProduct)
    }

    return (
        <div>
            <h2>Edit Product</h2>
            <label>Title
            <input type='text' placeholder='title' onChange={editTitle} value={editedProduct.title} />
            <br></br>
            </label>
            <label>Image
            <input type='text' placeholder='image' onChange={editImage} value={editedProduct.image} />
            <br></br>
            </label>
            <label>Price
            <input type='text' placeholder='price' onChange={editPrice} value={editedProduct.price} />
            <br></br>
            </label>
            <label>Desc
            <input type='text' placeholder='desc' onChange={editDesc} value={editedProduct.desc} />
            <br></br>
            </label>
            <label>Year
            <input type='text' placeholder='year' onChange={editYear} value={editedProduct.year} />
            <br></br>
            </label>
            <button onClick={handleSaveChanges}>Save Changes</button>
        </div>
    );
};

export default EditProduct;