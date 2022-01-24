import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Items from './../components/Items';
const Orders = () => {
    
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        async function fetchOrdersDB(){
    try{
        const {data} = await axios.get('https://61e95d2a7bc0550017bc6245.mockapi.io/orders');
        console.log(data);
        setOrders(data.map(obj => obj));
        }
        catch(error){
            alert('Увы, что-то пошло не так');
            console.error(error);
        }
    }
        fetchOrdersDB();
    })
    return ( <>
        <header className="header">
    <div className="header__top">
      <Link to="/" >
    <img className="logo" src="img/logo.png" alt="logo-img"  />
    </Link>
    </div>
    </header>
<h1 className='pop'>Мои заказы</h1>
{ orders.map((item, index) => (
         <Items
         key={index}
         {...item} />
))}  </>  
    )
   
}
export default Orders;