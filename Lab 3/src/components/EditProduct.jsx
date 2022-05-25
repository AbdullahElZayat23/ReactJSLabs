import React from "react";
import { useLocation } from "react-router-dom";

export default function EditProduct({ editHandler }) {
  const location = useLocation();
  return (
    <>
      <form onSubmit={editHandler}>
        <label>
          Id:
          <input type="text" name="id" defaultValue={location.state.id} />
        </label>
        <br />
        <label>
          Name:
          <input type="text" name="name" defaultValue={location.state.name} />
        </label>
        <br />
        <label>
          Price:
          <input type="text" name="price" defaultValue={location.state.price} />
        </label>
        <br />
        <label>
          Quantity:
          <input
            type="text"
            name="quantity"
            defaultValue={location.state.quantity}
          />
        </label>
        <br />
        <label>
          img:
          <input type="text" name="img" defaultValue={location.state.img} />
        </label>
        <br />
        <label>
          Description:
          <input type="text" name="desc" defaultValue={location.state.desc} />
        </label>
        <br />
        <input type="submit" className="btn btn-primary" value="Edit" />
      </form>
    </>
  );
}
