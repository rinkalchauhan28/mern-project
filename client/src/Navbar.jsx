import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{display: 'flex',
      gap: '9px',
      padding: '15px 30px',
      background: "#579f8c",
      color: '#fff',
      alignItems: 'center',
      fontSize: '18px'}}>
    <img src="/shop.jpg" alt="My Store Logo" style={{ width: '50px',height: '50px',
        borderRadius: '50%',objectFit: 'cover' }}/>
    <h2 style={{ margin: 0, marginRight: 'auto', color: '#fff' }}>My Store</h2>
    <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link>
    <Link to="/product" style={{ color: '#fff', textDecoration: 'none',marginLeft: '50px' }}>Product</Link>
    <Link to="/login" style={{ color: '#fff', textDecoration: 'none',marginLeft: '50px' }}>Login</Link>
    <Link to="/register" style={{ color: '#fff', textDecoration: 'none',marginLeft: '50px' }}>Register</Link>
    </nav>
  );
}

export default Navbar
