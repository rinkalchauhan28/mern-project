import React, { useState } from 'react';
import axios from 'axios';

function Search({ setProducts }) {

  const [search, setSearch] = useState('')

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(
        `http://localhost:5000/api/v1/product/search?search=${search}`,{
          withCredentials: true
        });
      console.log(res.data);
      setProducts(res.data.pro);
    } catch (error) {
      console.log(error);
      // setProducts([]);
    }
  };

  return (
    <form onSubmit={handleSearch} style={{display:'flex',justifyContent:'center',margin:'20px'}}>
    <input type="text" placeholder="Search product..." value={search}
      onChange={(e) => setSearch(e.target.value)}
        style={{ padding: '10px',width: '250px'}}/>
      <button type="submit" style={{ padding: '10px 20px',marginLeft: '10px'}}>Search</button>
    </form>
  );
}

export default Search;