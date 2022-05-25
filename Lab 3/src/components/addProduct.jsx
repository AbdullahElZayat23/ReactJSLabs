import React from "react";

export default function AddProduct({ submitHandler }) {
  return (
    <>
      <form onSubmit={submitHandler}>
        <label>
          Id:
          <input type="text" name="id" />
        </label>
        <br />
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <br />
        <label>
          Price:
          <input type="text" name="price" />
        </label>
        <br />
        <label>
          Quantity:
          <input type="text" name="quantity" />
        </label>
        <br />
        <label>
          img:
          <input type="text" name="img" />
        </label>
        <br />
        <label>
          Description:
          <input type="text" name="desc" />
        </label>
        <br />
        <input type="submit" className="btn btn-primary" value="Add" />
      </form>
    </>
  );
}
