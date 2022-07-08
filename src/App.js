
import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Additem from "./components/Additem"
import ProductList from "./components/ProductList.jsx";
import Footer from "./components/Footer.jsx";
import { useState } from "react";

function App() {
  const products = [
    {
      Name: "iphone 11 pro",
      Price: 99999,
      Quantity: 0,
    },
    {
      Name: "Oppo F11 pro",
      Price: 9999,
      Quantity: 0,
    },
  ];

  const [Products, setProducts] = useState(products);
  const [TotalAmount, setTotalAmount] = useState(0);

  const incrementQuantity = (index) => {
    let newProducts = [...Products];
    let newTotalAmount = TotalAmount;
    newProducts[index].Quantity++;
    newTotalAmount += newProducts[index].Price;
    setProducts(newProducts);
    setTotalAmount(newTotalAmount);
  };

  const decrementQuantity = (index) => {
    let newProducts = [...Products];
    let newTotalAmount = TotalAmount;
    if (newProducts[index].Quantity > 0) {
      newProducts[index].Quantity--;
      newTotalAmount -= newProducts[index].Price;
    }
    setProducts(newProducts);
    setTotalAmount(newTotalAmount);
  };

  const resetQuantity = () =>{
    let newProducts = [...Products];
    newProducts.map((product)=>{
      product.Quantity=0;
    })
    setProducts(newProducts);
    setTotalAmount(0);
  }

  const removeProduct = (index) => {
    let newProducts = [...Products];
    let newTotalAmount = TotalAmount;
    newTotalAmount -= (newProducts[index].Price*newProducts[index].Quantity);
    newProducts.splice(index,1);
    setProducts(newProducts);
    setTotalAmount(newTotalAmount);
  };


  const addProduct = (name,price) => {
    let newProducts = [...Products];
    newProducts.push({
      Name:name,
      Price:price,
      Quantity:0,
    });
    setProducts(newProducts);
  };

  return (
    <>
      <Navbar Products={Products}/>
      <main className="cotainer mt-5 m-5">
        <Additem addProduct={addProduct}/>
        <ProductList
          products={Products}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
          removeProduct={removeProduct}
        />
      </main>
      <Footer TotalAmount={TotalAmount} ResetQuantity= {resetQuantity}/>
    </>
  );
}

export default App;
