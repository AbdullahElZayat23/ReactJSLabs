import './App.css';
import React from 'react';
import {Produacttable} from "./Components/products"
import { productlist  } from "./data";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "@fortawesome/fontawesome-free/css/all.css";

import {Header} from "./Components/header";
import {Footer  } from "./Components/footer";
import { Add } from './Components/add';
class App extends React.Component {
  


  constructor(props){
    super(props)
    this.state = {
    showAdd : false,
    products:productlist
    }
  }
  handleAdd(event){
    event.preventDefault();  
    let  item =    {id:event.target.id.value,
      name:event.target.name.value,
      price:event.target.price.value,
      quantity:event.target.quantity.value,
      img:event.target.img.value,
      desc:event.target.desc.value};
  
      
  this.setState({showAdd:false,products:[...this.state.products,item]});

  }

handelDelete(id){
 this.state.products.findIndex((value,index)=>{
 if (value.id == id ) {
   
   this.state.products.splice(index,1)  
  console.log(index);
  this.setState({products:this.state.products})
 
 }
  });


}

  render(){
if (!this.state.showAdd) {
  return (
    <div>
<Header></Header>
<input type="button" value="Add" className='btn btn-primary' onClick={()=>{ this.setState({showAdd:true});}}  />
<Produacttable products = {this.state.products} removeProduct = {this.handelDelete.bind(this)}   />

<Footer></Footer>
    </div>

  )}
  else{
    return ( <div>
    <Header></Header>
    <Add handleAdd={this.handleAdd.bind(this)} />
    <Footer></Footer>
    </div>

    )

  }
}

}

export default App;
