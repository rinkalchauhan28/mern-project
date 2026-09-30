import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Search from './Search';

function Home() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);

  const fetchProducts = async (pageNumber) => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/v1/product/getproduct?page=${pageNumber}`,{
          withCredentials: true
        });
      console.log(res.data);
      if (pageNumber === 1) {
        setProducts(res.data.allProduct);
      } else {
        setProducts((oldProducts) => [
          ...oldProducts,
          ...res.data.allProduct ])}
    } catch (error) {
      console.error('Error fetching products:', error);
    }};

  useEffect(() => {
    fetchProducts(page)
  }, [page]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=document.documentElement.scrollHeight - 100
      ) {
        setPage((oldPage) => oldPage + 1);
      }};
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
    <h2 style={{padding: '20px',textAlign: 'center'}}>Home Page</h2>
    <Search setProducts={setProducts}/>
    <div style={{display: 'flex',flexWrap: 'wrap',justifyContent: 'center',gap: '7px'}}>
      {products.map((item) => {
        return (
          <div key={item._id} style={{width: "250px",margin: "20px",padding: "30px",
                background: "white",
                borderRadius: "10px",
                boxShadow: "0 5px 20px rgba(0,0,0,0.30)",
                textAlign: "center"}}>
            <h3>{item.title} - ₹{item.price}</h3>
            <img width="150px" height="150px" src={item.image[0]} alt="" style={{objectFit: "cove"}}/>
            </div>
          )})}
      </div>
    </div>
  );
}

export default Home;