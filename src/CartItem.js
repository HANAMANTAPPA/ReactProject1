import React from "react";

class CartItems extends React.Component{
    constructor(){
        super();
        this.state ={
            price : 9999,
            title : "MobilePhone",
            qty: 1,
            img : ''
        }

    }
    render (){
        const { price , title , qty } =this.state;
        return (
            <div className="cart-item"> 
                {/* <h1>HI I'm div content for CartItem </h1>    */}
                <div className ="left-box">
                    <img style={style1.image} src="" />  
                </div>
                <div className="right-box">
                    <div style={ {fontSize: 25} }> {title} </div>
                    <div style={{color: '#7777' }}>Rs {price} </div>
                    <div style={{color: '#7777' }}>Quantity: {qty} </div>
                    <div className="cart-item-action">
                        <img alt="increase" className="action-icons" src="https://as2.ftcdn.net/v2/jpg/01/07/62/07/1000_F_107620769_UwNVSoXnKS4VNcOKoZjPohlEPn83oE38.jpg" />  
                        <img alt="decrease" className="action-icons" src="https://as1.ftcdn.net/v2/jpg/03/73/49/86/1000_F_373498649_nBxauQ0ipBSVrVcMpWWVmTpXu3BLvRyY.jpg" /> 
                        <img alt="delete" className="action-icons" src="https://as2.ftcdn.net/v2/jpg/03/73/50/09/1000_F_373500918_7vISJB85YXvvu7SgnpktP752LWRrLzyI.jpg" /> 
                    </div>
                </div>
            </div>
        );
    }
}

const style1={
    image: {
        height :110,
        width :110,
        borderRadius : 4 ,
        background : '#cccc'
    }
}
export default CartItems;