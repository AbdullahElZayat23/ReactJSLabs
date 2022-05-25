import './App.css';
import {Produacttable} from "./Components/products"
import { productlist  } from "./data";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import "@fortawesome/fontawesome-free/css/all.css";

import { ProduactDetails } from "./Components/productDetails";
import {Header} from "./Components/header";
import {Footer  } from "./Components/footer";
function App() {
  return (
    <div>
<Header></Header>
<Produacttable products ={productlist}  />
<ProduactDetails product = {productlist[0]} />
<Footer></Footer>
    </div>

  );
}

export default App;
