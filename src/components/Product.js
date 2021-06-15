import React, { useState } from "react";
import { BagPlusFill, HeartFill, Heart } from "react-bootstrap-icons";
import "./product.css";
function Product({ product, callback }) {
  const [heart, setheart] = useState(false);
  return (
    <div className="card  shadow mt-2 mb-2 overflow-hidden">
      <div>
        <img
          src={product.image}
          className="card-img-top"
          alt={product.category}
        />
      </div>
      <div className="card-header font-weight-bold">{product.title}</div>
      <div className="card-body">
        {product.quantity}
        {product.description.substring(0, 100)}...
      </div>
      <div
        className="col  bg-warning d-flex justify-content-around align-items-center"
        style={{ minHeight: "50px" }}
      >
        <div
          className="col-6 text-light"
          style={{
            fontSize: "2rem",
          }}
        >
          {product.price.toFixed(2)}
        </div>
        <div className="row col-6 d-flex justify-content-around">
          <div onClick={() => callback(product.id)}>
            <BagPlusFill className="md-6 text-primary" size={"2em"} />
          </div>
          <div onClick={() => setheart(!heart)} className="mt-1">
            {heart ? (
              <HeartFill className="md-6 text-primary" size={"2em"} />
            ) : (
              <Heart className="md-6 text-primary" size={"2em"} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
