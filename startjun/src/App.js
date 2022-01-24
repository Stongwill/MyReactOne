import { createContext, useEffect, useState } from 'react';
import { Route, Routes  } from 'react-router-dom';
import axios from 'axios';
import Home from './pages/Home.jsx';
import Cart from './pages/Cart.jsx';
import Orders from './pages/Orders';

export const storeContext = createContext({});

const App = () => { 
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [valSearch, setValSearch] = useState('');
  const [loader, setLoader] = useState(true);
  const changeInputSeacrh = (e) =>{
    setValSearch(e.target.value);
  }
    useEffect( () => {
      async function fetchDB(){
        const resItems = await axios.get('https://61e95d2a7bc0550017bc6245.mockapi.io/Items');
        const resCart = await axios.get('https://61e95d2a7bc0550017bc6245.mockapi.io/cart');
      
        setLoader(false);
        setCartItems(resCart.data);
        setItems(resItems.data);
      
      }
      fetchDB();
  },[]);

  const toCart = async(obj) => {
      if(cartItems.find(item => Number(item.id) === Number(obj.id))){
        await axios.delete(`https://61e95d2a7bc0550017bc6245.mockapi.io/cart/${obj.id}`);
        setCartItems(prev => prev.filter(item => Number(item.id) !== Number(obj.id)));
      }
      else{
      await axios.post('https://61e95d2a7bc0550017bc6245.mockapi.io/cart', obj);
      setCartItems(prev => [...prev, obj]);
    }
  }

  const onDeleteItem = (id) => {
    axios.delete(`https://61e95d2a7bc0550017bc6245.mockapi.io/cart/${id}`);
    setCartItems(prev => prev.filter(item => Number(item.id) !== Number(id)));
  }

    return(  <> 
<storeContext.Provider value={{setCartItems, cartItems, toCart}}>
      <Routes>
      <Route exact path="/" element={<Home changeInputSeacrh={changeInputSeacrh} valSearch={valSearch} setValSearch={setValSearch} items={items} toCart={toCart} cartItems={cartItems} loader={loader} />}/> 
    <Route exact path="/cart"  element={<Cart items={cartItems} onDelete={onDeleteItem} />} />
   <Route exact path="/orders" element={<Orders /> } />
    </Routes>
  
    </storeContext.Provider>
     </>

) 

}

export default App;
