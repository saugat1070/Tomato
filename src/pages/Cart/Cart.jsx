import React, { useContext } from 'react'
import "./Cart.css"
import { StoreContext } from '../../Context/StoreContext'

export default function Cart() {

  const {cartItems,setCartItems,food_list,removeFromCart} = useContext(StoreContext);
  const removeCart = (id)=>{
    setCartItems((prev)=>({...prev,[id]:0}))
  }

  return (
    
    <div className='cart'>
      <div className='cart-items'>
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {
        food_list.map((item,index)=>{
          if(cartItems[item._id]>0){
            return (
              <>
            <div className='cart-items-title cart-items-item'>
              <img src={item.image} alt="" />
              <p>{item.name}</p>
              <p>${item.price}</p>
              <p>{cartItems[item._id]}</p>
              <p>${cartItems[item._id] * item.price}</p>
              <p className='cross' onClick={()=>removeCart(item._id)}>X</p>
            </div>
            <hr />
            </>
          )
          }
        })
        }
      </div>
      <div className='cart-bottom'>
        <div className='cart-total'>
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal:</p>
              <p>{0}</p>
            </div>
            <div className="cart-total-details"></div>
            <div className="cart-total-details"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
