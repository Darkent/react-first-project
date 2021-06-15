import React, { useState } from "react";
import { BagFill, HeartFill } from "react-bootstrap-icons";
import Cart from "./Cart";

const Header = ({ filter, products }) => {
  const [search, setsearch] = useState("");
  const [modalStyle, setmodalStyle] = useState({
    position: "fixed",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "1rem",
    background: "rgba(0, 0, 0, 0.8)",
    cursor: "pointer",
    visibility: "hidden",
    opacity: "0",
    transition: "all 0.35s ease-in",
    overflow: "scroll",
  });

  const open = async () => {
    let newStyle = {
      ...modalStyle,
      opacity: "1",
      visibility: "visible",
    };
    setmodalStyle(newStyle);
  };
  const totalItems = products.reduce((a, b) => a + b.quantity, 0);

  const close = async () => {
    let newStyle = {
      ...modalStyle,
      opacity: "0",
      visibility: "hidden",
    };
    setmodalStyle(newStyle);
  };
  return (
    <div className=" bg-primary row p-4 navbar-header sticky-top">
      <div className="col-md-2 col-sm-2 text-center mb-2"></div>
      <div className="col-md-7 col-sm-6 mb-2">
        <div className="input-group flex-nowrap">
          <input
            type="text"
            name=""
            id=""
            value={search}
            onChange={async (e) => {
              await setsearch(e.target.value);
              filter(e.target.value);
            }}
            placeholder="Buscar producto..."
            className="form-control"
          />
          <button
            className="btn btn-danger"
            onClick={() => {
              setsearch("");
            }}
          >
            Buscar
          </button>
        </div>
      </div>
      <div className="col-md-3 col-sm-4">
        <div className="row d-flex align-items-center justify-content-end">
          <div className="mr-3">
            <BagFill size={"2em"} onClick={open} />
            {products.length !== 0 && (
              <span className="badge badge-warning">{totalItems}</span>
            )}
          </div>
          <div className="mt-2 ">
            <HeartFill size={"2em"} />
          </div>
        </div>
      </div>
      <div className="modal" style={modalStyle} id="modal1">
        <Cart close={close} products={products} />
      </div>
    </div>
  );
};

export default Header;
