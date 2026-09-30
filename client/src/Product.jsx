import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './App.css'

function Product() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [img, setImg] = useState(null);

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const file = new FormData();
    file.append("title", title);
    file.append("description", description);
    file.append("price", price);
    file.append("category", category);
    file.append("image", img);
    try {
      await axios.post('http://localhost:5000/api/v1/product/createproduct',file,{
          withCredentials: true
        });
      alert('Product Added Successfully!');
      navigate('/home');
    } catch (error) {
      console.error(error);
      alert('Failed to add product');
    }
  };

  return (
    <div style={{
        width: "500px",
        margin: "50px auto",
        padding: "45px",
        background: "white",
        borderRadius: "10px",
        boxShadow: "0 5px 20px rgba(0,0,0,0.25)"}}>
      <h2 style={{ marginBottom: "35px",color: "#263238",fontSize: "32px"}}>Add New Product</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Title" style={{
                width: "100%",
                padding: "18px",
                marginBottom: "20px",
                boxSizing: "border-box",
                backgroundColor: "white",
                border: "2px solid #ddd",
                borderRadius: "7px",
                fontSize: "17px",
                outline: "none"}} onChange={(e) => setTitle(e.target.value)}/>   
        <br />
        <input type="text" name="description" placeholder="Description" style={{
                width: "100%",
                padding: "18px",
                marginBottom: "20px",
                boxSizing: "border-box",
                backgroundColor: "white",
                border: "2px solid #ddd",
                borderRadius: "7px",
                fontSize: "17px",
                outline: "none"}} onChange={(e) => setDescription(e.target.value)}/>
        <br />        
        <input type="number" name="price" placeholder="Price" style={{
                width: "100%",
                padding: "18px",
                marginBottom: "20px",
                boxSizing: "border-box",
                backgroundColor: "white",
                border: "2px solid #ddd",
                borderRadius: "7px",
                fontSize: "17px",
                outline: "none"}} onChange={(e) => setPrice(e.target.value)}/>
        <br />
        <input type="text" name="category" placeholder="Category" style={{
                width: "100%",
                padding: "18px",
                marginBottom: "20px",
                boxSizing: "border-box",
                backgroundColor: "white",
                border: "2px solid #ddd",
                borderRadius: "7px",
                fontSize: "17px",
                outline: "none"}} onChange={(e) => setCategory(e.target.value)}/>
        <br />
        <input type="file" name="image" style={{
                width: "100%",
                padding: "18px",
                marginBottom: "20px",
                boxSizing: "border-box",
                backgroundColor: "white",
                border: "2px solid #ddd",
                borderRadius: "7px",
                fontSize: "17px",
                outline: "none"}} onChange={(e) => setImg(e.target.files[0])}/>
        <br />
        <button type="submit" style={{
                width: "100%",
                padding: "17px",
                background: "#579f8c",
                color: "white",
                border: "none",
                borderRadius: "7px",
                fontSize: "19px",
                fontWeight: "bold",
                cursor: "pointer"}}>Add Product</button>
      </form>
    </div>
  );
}

export default Product;