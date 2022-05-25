import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Products({ products, removeHandler, onCategoryChange }) {
  const history = useHistory();
  const goToDetails = (p) => {
    history.push("/details", p);
  };
  const goToEdit = (p) => {
    history.push("/edit", p);
  };
  let prods = products.map((p) => {
    return (
      <tr>
        <td>{p.id}</td>
        <td>{p.name}</td>
        <td>{p.price}</td>
        <td>{p.quantity}</td>

        <td>{p.desc}</td>
        <td>
          {" "}
          <img style={{ height: 70, width: 70 }} src={p.img} />{" "}
        </td>
        <td>
          <input
            type="button"
            onClick={() => goToDetails(p)}
            className="btn btn-dark"
            value="Details"
          />
        </td>
        <td>
          <input
            type="button"
            onClick={() => goToEdit(p)}
            className="btn btn-warning"
            value="Edit"
          />
        </td>
        <td>
          <input
            type="button"
            onClick={() => removeHandler(p.id)}
            className="btn btn-danger"
            value="Delete"
          />
        </td>
      </tr>
    );
  });
  return (
    <>
      <select onChange={onCategoryChange}>
        <option value="Car">Car</option>
        <option value="Clothes">Clothes</option>        
      </select>
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
        <tbody>{prods}</tbody>
      </table>
    </>
  );
}

export default Products;
