import { createSlice } from "@reduxjs/toolkit";
import Swal from 'sweetalert2';
var cartItem = JSON.parse(sessionStorage.getItem('cart'));
if (cartItem==null) {
    cartItem=[]
}
const initialState = {
    cartItems : cartItem
}
export const cartSlice=createSlice({
    name :'cart',
    initialState,
    reducers :{
        addToCart(state,action){
            const product=action.payload;
            let producttest=state.cartItems.find((b)=>b.asin == product.asin);
            if (producttest) {
              producttest.quantity += 1
              Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Your product has been updated",
              showConfirmButton: false,
              timer: 1500
              });
            }else{
              state.cartItems= [product,...state.cartItems];
              Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Your product has been saved",
              showConfirmButton: false,
              timer: 1500
              });
            }
            sessionStorage.setItem('cart', JSON.stringify(state.cartItems));
         },
        increQ(state,action){
            const product=action.payload;
            let producttest=state.cartItems.find((pro)=>pro.asin === product.asin);
            if (producttest) {
              producttest.quantity += 1;
              Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Your product has been updated",
              showConfirmButton: false,
              timer: 1500
              });
            }
            sessionStorage.setItem('cart', JSON.stringify(state.cartItems));
         },
        decreQ(state,action){
            const product=action.payload;
            let producttest=state.cartItems.find((pro)=>pro.asin === product.asin);
            if (producttest) {
              producttest.quantity -= 1
              if (producttest.quantity ==0) {
                state.cartItems= state.cartItems.filter((b)=>b.asin != product.asin);
              }
              Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Your product has been updated",
              showConfirmButton: false,
              timer: 1500
              });              
            }
            sessionStorage.setItem('cart', JSON.stringify(state.cartItems));
        },
        remove(state,action){
            const product=action.payload;
            state.cartItems=state.cartItems.filter((b)=>b.asin != product.asin);
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your product has been removed",
                showConfirmButton: false,
                timer: 1500
            });
            sessionStorage.setItem('cart', JSON.stringify(state.cartItems));
        }
    }
})
export const {addToCart,increQ,decreQ,remove} = cartSlice.actions
export default cartSlice.reducer;                                                
                                                    