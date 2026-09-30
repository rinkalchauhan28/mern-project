import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./Home";
import Register from './Register';
import Login from './Login';
import Navbar from './Navbar';
import Product from './Product';

const App = () => {
    return (
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/register' element={<Register />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/product' element={<Product />}/>
        </Routes>
      </BrowserRouter>
    );
};

export default App;