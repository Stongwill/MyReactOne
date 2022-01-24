
import { Link } from "react-router-dom";

const Header = ({cartItems, changeInputSeacrh, valSearch, setValSearch}) => {
    return (<>
    <header className="header">
    <div className="header__top">
      <Link to="/" >
    <img className="logo" src="img/logo.png" alt="logo-img"  />
    </Link>
   <div className="search">
    <img src="https://i7.uihere.com/icons/770/297/200/search-linear-aaa8a4127a7b3dcf1eae6099cfba0e52.png" alt="search-item" width={30} />
     <input onChange={changeInputSeacrh} className="search__item" placeholder="Поиск на MobileCity" value={valSearch}/>
    {valSearch && <p onClick={ () => setValSearch('')}>✖</p>}
  </div> 
    <div className="cart">
      <Link to="/cart" > 
      <img className="cart__img" src="https://minipress.ru/katalog/wp-content/uploads/icons/kisspng-shopping-cart-software-computer-icons-mayline-5b3b72a89c95a3.3174593115306226326414.png"  alt="cart-item"  />
      </Link>
        <span className="cart__title">{cartItems.reduce((sum, obj) => obj.price + sum, 0)} руб.</span>
        <Link to="/orders" > 
      <img className="cart__orders" src="https://yarusbalki.ru/images/vid/ic3.png"  alt="cart-item"  />
      </Link>
</div>
</div>
</header>
  <h1 className={valSearch ? "phone__search" : "phone__title"}>
       {valSearch ? `Поиск по запросу: "${valSearch}"` : "Смартфоны"}
      </h1>
      </>
    )
}
export default Header;

