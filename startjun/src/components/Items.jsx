import React, {useState} from 'react';
import ContentLoader from "react-content-loader";

const Items = ({id, image, title, price, onAdd, plus = false, loading = false}) => {
  const [isAddItem, setAddItem] = useState(plus);

  const handleAdd = () => {
    onAdd({id,title, image, price});
    setAddItem(!isAddItem);
  }

    return (
        <div className="card__item">
          { loading ? <ContentLoader 
    speed={2}
    width={400}
    height={500}
    viewBox="0 0 400 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="19" y="235" rx="0" ry="0" width="195" height="42" /> 
    <rect x="34" y="315" rx="0" ry="0" width="121" height="21" /> 
    <circle cx="195" cy="325" r="14" /> 
    <rect x="65" y="22" rx="0" ry="0" width="115" height="180" />
  </ContentLoader> :
   <> <img src={image} alt="item__images" width={95} height={180}/>
          <p className="phone__txt">{title}</p>
          <div className="phone__price-add">
          <div className="phone__price">
            <span>Цена:</span>
            <b>{price} руб.</b>
          </div>
          {onAdd && <button className="phone__add" onClick={handleAdd}>{isAddItem ? "✔" : "Добавить"}</button>}
          </div>  
          </>}
        
        </div>
        
    )
    
}
export default Items;