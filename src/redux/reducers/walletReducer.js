import { createSlice } from "@reduxjs/toolkit";


const transaction = {
    id:"123456789",
    time: '12:02:03',
    message:'transaction message',
    isSuccesful: true,
    
}

export const walletSlice = createSlice({
    name: "wallet",
    initialState:{
        transactions:[transaction,transaction,transaction,transaction],
        balance:0
    },
    reducers:{
        addTransaction:(state,action)=>{
            state.transactions = [...state.transactions, action.payload]
        }
    }
});

export const {addTransaction} = walletSlice.actions;

export default walletSlice.reducer;