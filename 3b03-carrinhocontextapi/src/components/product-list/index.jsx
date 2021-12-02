import Button from "../button";

import { useContext } from "react";

import { CatalogueContext } from "../../providers/catalogue/catalogue";
import { CartContext } from "../../providers/cart/cart";
import styles from "./styles.css";
// import { Container, List } from './styles'

const ProductList = ({ type }) => {
  const { catalogue } = useContext(CatalogueContext);
  const { cart } = useContext(CartContext);

  return (
    <ul>
      <div className="container">
        {type === "catalogue" &&
          catalogue.map((item, index) => (
            <div className="catalogue">
              <li key={index}>
                {item.name} <Button type={type} item={item} />
              </li>
            </div>
          ))}
        <div className="separation"></div>
        {type === "cart" &&
          cart.map((item, index) => (
            <div className="cart">
              <li key={index}>
                <span>{item.name}</span>
                <Button type={type} item={item} />
              </li>
            </div>
          ))}
      </div>
    </ul>
  );
};

export default ProductList;
