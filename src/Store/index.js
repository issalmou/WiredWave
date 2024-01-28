import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '../PageCart/CartSlice';
const Store = configureStore({
    reducer : {
        cart : cartReducer 
    }
});
export default Store 