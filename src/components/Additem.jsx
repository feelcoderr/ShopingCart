import React from 'react';


class Additem extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            productName:"",
            productPrice: 0
         }
    }
    
    render() { 
        return (
            <form className="row mb-3" onSubmit={(e)=>{
                e.preventDefault();
                this.props.addProduct(this.state.productName,Number(this.state.productPrice))
            } }>
        <div className="mb-3 col-4">
          <input
            type="text"
            className="form-control py-2"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Product Name"
            name="productName"
            onChange={(e)=>{
                this.setState({productName:e.currentTarget.value})
            }}
            value ={this.state.productName}
          />
        </div>
        <div className="mb-3 col-4">
          <input
            type="number"
            className="form-control py-2"
            id="exampleInputPassword1"
            placeholder= "0000"
            name="productPrice"
            onChange={(e)=>{
                this.setState({productPrice:e.currentTarget.value})
            }}
            value ={this.state.productPrice}
          />
        </div>
        <div className=" col-4">
        <button type="submit" className="btn btn-primary p-2">
          Add Product
        </button>
        </div>
      </form>
    );
          
    }
}
 
export default Additem;