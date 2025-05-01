import { useContext } from "react";
import { ShopContext } from "../context";

function GoodsItem(props) {
    const {
        offerId,
        displayName,
        displayDescription,
        price: {regularPrice},
        displayAssets = [],
    } = props;

    const {addOrder} = useContext(ShopContext)

    const full_background = displayAssets.length > 0 ? displayAssets[0].full_background : null;

    return  <div className="card">
        <div className="card-image">
          <img src={full_background} alt={displayName}/>
        </div>
        <div className="card-content indigo lighten-5">
        <span className="card-title">{displayName}</span>
          <p>{displayDescription}</p>
        </div>
        <div className="card-action">
          <button className="btn  indigo lighten-3" onClick={() => addOrder({offerId, displayName, regularPrice,})}>Купить</button>
          <span className="right white-text" style={{fontSize: '1.8rem'}}>{regularPrice} руб.</span>
        </div>
  </div>
}

export {GoodsItem};
