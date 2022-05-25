export  function ProduactDetails(props) {
    return(
        <div>
            <h3>Details</h3>
            <span>{props.product.name} </span> <br />
            <span>{props.product.desc} </span> <br />
           <img src={props.product.img}/>
        </div>
    )

}
