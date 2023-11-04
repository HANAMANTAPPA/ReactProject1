import React from "react";

class CartItems extends React.Component{
    render (){
        return (
            <div className="cart-item">
                <h1>HI I'm div content for CartItem </h1>
                <div className ="left-box">
                    <img style={style1.image}> 
                    </img>
                </div>
                <div className="right-box">
                    <div style={ {fontSize: 25} }>Phone</div>
                    <div style={{color: '#7777' }}>Rs 9999</div>
                    <div style={{color: '#7777' }}>Quantity: 1</div>
                    <div className="cart-item-action">

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