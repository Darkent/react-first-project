import React from "react";

function Cart({ close, products }) {
  return (
    <div className="card w-50 p-2">
      <div className="card-title text-center">Carrito de compras</div>
      <hr />
      {products.length === 0 ? (
        <div className="card-text text-center">No hay productos comprados</div>
      ) : (
        <div className="container">
          <table className="table table-striped">
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td>{product.quantity}</td>
                  <td>{product.title}</td>
                  <td>{product.category}</td>
                  <td>{product.price.toFixed(2)}</td>
                </tr>
              ))}
              <tr>
                <td colSpan="3">TOTAL</td>
                <td>{products.reduce((a, b) => a + b.price, 0)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
      <div className="col text-right m-2">
        <button className="btn btn-primary" onClick={close}>
          Cerrar
        </button>
      </div>
    </div>
  );
}

export default Cart;
