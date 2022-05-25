import { useLocation } from "react-router-dom";

export function ProductDetails() {
  const location = useLocation();
  return (
    <>
      <h3>Details</h3>
      <span>{location.state.name} </span> <br />
      <span>{location.state.desc} </span> <br />
      <img src={location.state.img} />
    </>
  );
}
