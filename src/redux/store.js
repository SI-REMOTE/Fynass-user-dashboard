import { configureStore } from "@reduxjs/toolkit";
import walletSlice from "./reducers/walletReducer";



export default configureStore({
    reducer:{
        wallets: walletSlice
    }
})