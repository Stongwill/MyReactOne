import Items from '../components/Items';
import Header from '../components/Header';

const Home = ({ cartItems, items, toCart, changeInputSeacrh, valSearch, setValSearch, loader}) => {
    const displayItems = () => { 
        return ( loader ? [...Array(8)]: items
        .filter(item => item.title.toLowerCase().includes(valSearch.toLowerCase()))) 
         .map((item, index) => (
         <Items
         key={index} 
         onAdd={toCart}
         plus={cartItems.some( obj => Number(obj.id) === Number(item.id))}
         loading={loader}
         {...item}
        
         />))}
    return ( <>
     <Header cartItems={cartItems} changeInputSeacrh={changeInputSeacrh} valSearch={valSearch} setValSearch={setValSearch} />
        {displayItems()}
            
             </>
    )
}
export default Home;