import React, { createContext, useState } from 'react'
import { PRODUCTS } from '../data/data';
import { addentional } from '../data/data';


export const ShopContext = React.createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let i = 1; i < PRODUCTS.length + 1; i++) {
      cart[i] = 0;
    }
    return cart;
  };

const getAddentionaltCart = () => {
  let cart = {};
  for (let i = 1; i < addentional.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] =  useState(getDefaultCart());
    const [addentionalCartItems, setAddentionalCartItems] =  useState(getAddentionaltCart());



    const getAddiontionalTotalCartAmount = () => {
      let addentionalTotalAmount = 0
        for (let i in addentionalCartItems){
          if(addentionalCartItems[i]>0){
            const addentionalProductInfo = addentional.find((addentionalProduct)=>{
              if(addentionalProduct.id == i){
                addentionalTotalAmount  += addentionalProduct.price
              }
            })
          }
        }
        return addentionalTotalAmount
    }

    const getTotalCartAmount = () => {
      let totalAmount = 0
        for (let i in cartItems){
          if(cartItems[i]>0){
            const productInfo = PRODUCTS.find((product)=>{
              if(product.id == i){
                totalAmount  += product.price
              }
            })
          }
        }
        return totalAmount
    }

    const addAddiontionalToCart = (itemId)=>{
      setAddentionalCartItems((prev)=>({...prev, [itemId]: 1}))
  }
  const removeAddiontionalFromCart = (itemId)=>{
    setAddentionalCartItems((prev)=>({...prev, [itemId]: prev[itemId]-1}))
  }





    const addToCart = (itemId)=>{
        setCartItems((prev)=>({...prev, [itemId]: 1}))
    }
    const removeFromCart = (itemId)=>{
        setCartItems((prev)=>({...prev, [itemId]: prev[itemId]-1}))
    }

    const updateCartItemCount = (newAmount, itemId) =>{
        setCartItems((prev)=>({...prev, [itemId]:newAmount }));
    }

    const checkout = () => {
      setCartItems(getDefaultCart());
    };

    const contextValue = {cartItems, addentionalCartItems, addToCart, removeFromCart, getTotalCartAmount, updateCartItemCount, checkout, addAddiontionalToCart, removeAddiontionalFromCart, getAddiontionalTotalCartAmount}
    console.log(cartItems)

  return (
    <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
  )
}
