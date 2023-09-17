import React, { useState, useEffect } from 'react';
import './App.css';
import { v4 as uuidv4 } from 'uuid';
import View from './components/View/View';
import EditProduct from './components/EditProduct/EditProduct';
import Detail from './components/Details/Detail';


// getting data from local storage
const getDatafromLS=()=>{
  const data = localStorage.getItem('products');
  if(data){
    return JSON.parse(data);
  }
  else{
    return []
  }
}

function App() {
  const [products, setProducts]=useState(getDatafromLS());
  const [editedObj, setEditedObj] = useState(null);
  const [detail, setDetail] = useState(null);

  // input field states
  const [title, setTitle]=useState('');
  const [image, setImage]=useState('');
  const [price, setPrice]=useState('');
  const [desc, setDesc]=useState('');
  const [year, setYear]=useState('');

  const handleAddProductSubmit=(e)=>{
    e.preventDefault();
    // creating an object
    let product={
      id: uuidv4(),
      title,
      image,
      price,
      desc,
      year
    }
    setProducts([...products,product]);
    setTitle('');
    setImage('');
    setPrice('');
    setDesc('');
    setYear('');
  }

  // delete product from LS
  const deleteProduct=(id)=>{
    const filteredProducts=products.filter((element,index)=>{
      return element.id !== id
    })
    setProducts(filteredProducts);
  }
  function saveChanges(newObj) {
    let newProducts = [...products]
    newProducts = newProducts.map((item) => {
      if(item.id === newObj.id) {
        return newObj
      } else {
        return item
      }
    })
    setProducts(newProducts)
    setEditedObj(null)
  }

  function getEditedObj (id) {
    let oneObj = products.find((item) => item.id === id)
    setEditedObj(oneObj)
  }
  // saving data to local storage
  useEffect(()=>{
    localStorage.setItem('products',JSON.stringify(products));
  },[products])

   // ! Detail
   function detailProduct(id) {
    let details = products.find((item) => item.id === id);
    setDetail(details);
  }
  // !CloseDetail
  function closeModDetail() {
    setDetail(null);
  }
  return (
    <div className="App">
      <h1>Store App</h1>
      <p>Add and view products using local storage</p>
      <div className='form-container'>
      <form className='form-group' onSubmit={handleAddProductSubmit}>
            <label>Title</label>
            <input type="text" className='form-control' required
            onChange={(e)=>setTitle(e.target.value)} value={title}></input>
            <br></br>
            <label>Image</label>
            <input type="text" className='form-control' required
            onChange={(e)=>setImage(e.target.value)} value={image}></input>
            <br></br>
            <label>Price</label>
            <input type="text" className='form-control' required
            onChange={(e)=>setPrice(e.target.value)} value={price}></input>
            <br></br>
            <label>Description</label>
            <input type="text" className='form-control' required
            onChange={(e)=>setDesc(e.target.value)} value={desc}></input>
            <br></br>
            <label>Year</label>
            <input type="text" className='form-control' required
            onChange={(e)=>setYear(e.target.value)} value={year}></input>
            <br></br>
            <button type="submit" className='btn'>
              ADD
            </button>
          </form>
      </div>

      {products.length > 0 &&
        <>
          <View products={products} deleteProduct={deleteProduct} getEditedObj={getEditedObj} detailProduct={detailProduct}/>
          {editedObj ? (
        <EditProduct editedObj={editedObj} saveChanges={saveChanges}/>
      ) : null}

        {detail ? (
          <Detail detail={detail} closeModal={closeModDetail} />
        ) : null}
        </>
}

    </div>
  );
}

export default App;

