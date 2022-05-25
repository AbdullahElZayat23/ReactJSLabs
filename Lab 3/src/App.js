import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import React, { Component, useState } from 'react';
import { productlist } from './data/productsData';
import { users } from './data/users';
import Products from './components/Products';
import AddProduct from './components/addProduct';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ProductDetails } from './components/ProductDetails';
import { useHistory } from "react-router-dom";
import EditProduct from './components/EditProduct';
import Login from './components/auth/Login';


export default function App() {
  const history = useHistory();
  const [products, setProducts] = useState(productlist);
  const [isLoged, setIsLoged] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const removeHandler = (id) => {
    setProducts((prevProds) => {
      return prevProds.filter(p => p.id !== id);
    })
  };

  const onCategoryChange = (event) => {
    setProducts((prevProds) => {
      return prevProds = productlist;
    })
    setProducts((prevProds) => {
      return prevProds.filter(p => p.category === event.target.value);
    })
  }

  const editHandler = (event) => {
    event.preventDefault();
    let id = Number.parseInt(event.target.id.value);
    let editedArr = productlist.filter(p => p.id !== id);
    editedArr.push({
      id: id,
      name: event.target.name.value,
      price: event.target.price.value,
      quantity: event.target.quantity.value,
      img: event.target.img.value,
      desc: event.target.desc.value
    });
    setProducts((prevProds) => {
      return prevProds = editedArr;
    })
    history.push('/');
  }

  const submitHandler = (event) => {
    event.preventDefault();
    productlist.push({
      id: event.target.id.value,
      name: event.target.name.value,
      price: event.target.price.value,
      quantity: event.target.quantity.value,
      img: event.target.img.value,
      desc: event.target.desc.value
    });
    setProducts((prevProds) => {
      return prevProds = productlist;
    });
    history.push('/');
  }

  const onLoginHandler = (event) => {
    event.preventDefault();
    const userName = event.target.username.value;
    const password = event.target.password.value;
    const user = users.find(u => u.userName === userName && u.password === password);
    console.log(user);
    if (!user) {
      return;
    }
    setIsLoged(true);
    if (user.role === 'admin') {
      setIsAdmin(true);
    }
  }

  if (!isLoged) {
    return <Login onLoginHandler={onLoginHandler} />
  }

  if (!isAdmin) {
    return (<>
      <h1>Welocme User!</h1>
    </>)
  }
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/'>
          {console.log(productlist)}
          <Products
            products={products}
            removeHandler={removeHandler}
            onCategoryChange={onCategoryChange} />
        </Route>
        <Route exact path='/add'>
          <AddProduct submitHandler={submitHandler} />
        </Route>
        <Route exact path='/details'>
          <ProductDetails />
        </Route>
        <Route exact path='/edit'>
          <EditProduct editHandler={editHandler} />
        </Route>
      </Switch>
    </>
  )
}