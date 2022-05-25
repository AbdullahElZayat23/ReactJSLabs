
export  function Produacttable(props) {
    let products = props.products.map(pro=>{

 
function showdetails(product){
   


}
    
    
   return( <tr>
         <td > <img src={pro.img} /> </td>
        <td>{pro.id}</td>
        <td>{pro.name}</td>
        <td>{pro.price}</td>
        <td>{pro.quantity}</td>
       
        <td>{pro.desc}</td>
        <td><input type="button" onClick={showdetails}  className="btn btn-dark" value="Details" /></td>
    </tr>)
    })
    return (
<table class="table">
    <thead>
        <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Imag</th>
            <th>Description</th>
            <th>Operation</th>
        
        </tr>
    </thead>   
    <tbody>
    {products}
 
    </tbody>
</table>

    );
  }