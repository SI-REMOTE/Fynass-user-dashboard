import React from "react";
import { Routes, Route } from "react-router-dom";
import css from '../css/bank.module.css';


export const AddBank = () => {
    return(
        <div className={css.dboard} >
       <h1>Bank page</h1>
        </div>
    );
};
export const ViewBank = () => {
    return(
        <div className={css.dboard} >
       <h1>Bank page</h1>
        </div>
    );
};
export const Bank = () => {
    return(
        <div className={css.dboard} >
            <div>
               <h1>Bank page</h1>
            </div>
          <Routes>
                <Route path='/' element={<AddBank/>}/>
               <Route path="/add-bank" element={<AddBank/>}/>
                <Route path="/view-bank" element={<ViewBank/>}/> 
          </Routes>
        </div>
    );
};