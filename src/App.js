import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import axios from "axios";
import Product from "./components/Product";
import logo from "./assets/logo.png";
function App() {
  const [products, setproducts] = useState([]);
  const [cartProducts, setcartProducts] = useState([]);
  const [origin, setorigin] = useState([]);

  useEffect(async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    const addQty = res.data.map((product) => {
      return { ...product, quantity: 1 };
    });
    setorigin([...addQty]);
    setproducts(JSON.parse(JSON.stringify(addQty)));
  }, []);

  const addCart = (id) => {
    let product = products.find((product) => product.id === id);
    if (product) {
      let productExist = cartProducts.findIndex(
        (prod) => prod.id === product.id
      );
      if (productExist >= 0) {
        let newCartProducts = JSON.parse(JSON.stringify(cartProducts));
        newCartProducts[productExist].quantity += 1;
        newCartProducts[productExist].price +=
          newCartProducts[productExist].price;
        setcartProducts(newCartProducts);
      } else {
        setcartProducts([...cartProducts, product]);
      }
    }
    console.log(products);
  };

  const filter = (word) => {
    let productsFiltered = origin.filter((product) =>
      product.title.toLowerCase().includes(word.toLowerCase())
    );

    setproducts(productsFiltered);
  };

  return (
    <div>
      <div className="col bg-secondary text-center">
        <img src={logo} alt="" />
      </div>
      <Header filter={filter} products={cartProducts} />
      <div className="container mt-3">
        <div className="card-columns">
          {products.map((product) => (
            <Product product={product} key={product.id} callback={addCart} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
