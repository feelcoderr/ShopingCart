import React from "react";

export default function Product(props) {
    
    
  return (
    <div className="row">
      <div className="col-5">
        <h2 >
          {props.product.Name}
          <span class="badge bg-success m-1">₹ {props.product.Price}</span>{" "}
        </h2>
      </div>
      <div className="col-3">
        <div
          class="btn-group"
          role="group"
          aria-label="Basic mixed styles example"
        >
          <button type="button" class="btn btn-danger" onClick={()=>{props.decrementQuantity(props.index)}}>
            -
          </button>
          <button type="button" class="btn btn-warning">
            {props.product.Quantity}
          </button>
          <button type="button" class="btn btn-success" onClick={()=>{props.incrementQuantity(props.index)}}>
            + 
          </button>
        </div>
      </div>
      <div className="col-2">
        {(props.product.Price)*(props.product.Quantity)
        }
      </div>
      <div className="col-2">
      <button type="button" class="btn btn-warning" onClick={()=>{props.removeProduct(props.index)}} >
            Remove
      </button>
      </div>
    </div>
  );
}
