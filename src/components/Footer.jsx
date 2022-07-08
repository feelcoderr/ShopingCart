import React from 'react'

export default function Footer(props) {
  return (
    <div className='row justify-content-center '>
        <div className="col-2 d-flex justify-content-center ">
            <button className="bg-danger" onClick={()=>{props.ResetQuantity()}}>Reset</button>
        </div>
        <div className="col-3 bg-dark text-white text-center d-flex justify-content-center">
            ₹ {props.TotalAmount}
        </div>
        <div className="col-2 d-flex justify-content-center ">
            <button className="bg-success">Pay Now</button>
        </div>

    </div>
  )
}
