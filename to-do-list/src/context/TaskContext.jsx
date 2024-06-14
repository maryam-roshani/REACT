import React, { createContext, useState } from "react";
import tasks from '../components/home/tasksData'
import Product from "../Pages/Product";

export const TaskContext = createContext(null);


  const TaskContextProvider = (props) => {

      const [cartItems, setCartItems] = useState(getDefaultCart());

      const addTask = (taskId) =>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
      }

      const removeTask = (itemId) =>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
      }

      const removeCartItem = (itemId) =>{
        setCartItems((prev)=>({...prev,[itemId]:0}))

      }

      const getTotalCartAmount = () => {
        let totalAmount = 0;
        for(const item in cartItems)
        {
            if(cartItems[item]>0)
            {
                let itemInfo = all_products.find((product)=>product.id===Number(item))
                totalAmount += itemInfo.price * cartItems[item];
            }
        }
        return totalAmount.toFixed(2)
      }

      const getTotalCartItems = () =>{
        let totalItem = 0;
        for (const item in cartItems)
        {
          if(cartItems[item]>0)
          {
            totalItem += cartItems[item];
          }
        }
        return totalItem;
      }

      const rateItem = (itemId) =>{
          console.log()
      }

      const contextValue = {getTotalCartItems, getTotalCartAmount, all_products, cartItems, addToCart, removeFromCart, removeCartItem};
      return (
        <TaskContext.Provider value={contextValue}>
          {props.children}
        </TaskContext.Provider>
      )
  }

export default TaskContextProvider;
