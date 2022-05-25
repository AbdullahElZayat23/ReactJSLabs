import { useState } from "react";
import { ProduactDetails } from "./productDetails";
export  function Produacttable(props) {
 const [details,setdetails] = useState({})

    let products = props.products.map(pro=>{   
   return( <tr>
        <td>{pro.id}</td>
        <td>{pro.name}</td>
        <td>{pro.price}</td>
        <td>{pro.quantity}</td>
       
        <td>{pro.desc}</td>
        <td > <img src={pro.img} /> </td>
        <td><input type="button" onClick={()=>showdetails(pro)}  className="btn btn-dark" value="Details" /></td>
        <td><input type="button" onClick={()=>props.removeProduct(pro.id)}  className="btn btn-danger" value="Remove" /></td>
    </tr>)
    })
    function showdetails(product){
       setdetails(product)
    
    
    }
        
    return (
        <div>
<table class="table">
    <thead>
        <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Description</th>
            <th>Imag</th>
            <th>Operation</th>
        
        </tr>
    </thead>   
    <tbody>
    {products}
 
    </tbody>
</table>
<ProduactDetails product = {details} />
</div>
    );
  }