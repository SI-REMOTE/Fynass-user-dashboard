import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import css from '../css/wallet.module.css';
import image from '../images/wallet.png'
import {Routes,Route} from 'react-router-dom'


export const Transactions = () => {
    const transactionsState = useSelector((state)=>state.wallets.transactions);
    const balance = useSelector((state)=>state.wallets.balance);
    return(
        
         <div className={css.wall} >
            <h1>Transaction Details</h1>
            
          {transactionsState.map(transaction=>
            <div className={css.wall2} key={transaction.id}>
                <h6>wallet balance {balance}</h6>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>TIME</th>
                            <th>MESSAGE</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{transaction.id}</td>
                            <td>{transaction.time}</td>
                            <td>{transaction.message}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            )}
          </div>
    );
};
export const Deposit = () => {
    return(
        <div className={css.dp} >
            <h1>Deposit</h1>
            <h4>Enter Amount</h4>
          <input type= "text" placeholder="Enter Amount" className={css.dp1} />
          <input type="button" value="Make payment" className={css.dp2}/>
        </div>
    );
};
export const Withdraw = () => {
    const balance = useSelector((state)=>state.wallets.balance);
    return(
        <div className={css.dp} >
        <h1>Withdraw</h1>
        <h5>wallet balance {balance}</h5>
        <h4>Enter Amount</h4>
      <input type= "text" placeholder="Enter Amount" className={css.dp3} />
      <h4>Select Bank</h4>
      <select className={css.dp3} />
      <input type="button" value="Withdraw" className={css.dp2}/>
    </div>
    );
};

export const Wallet = () => {
    return(
        <Fragment>
            <div className={css.dboard} >
                <div className={css.dboard2} >
                    <div>
                        <h1>WALLET</h1>
                            <h5>You Can Access Your Account Balance and Fund Details Here.</h5>
                    </div>
                    <img className={css.ig} src={image} alt=""/>
                </div>
                 <Routes>
                <Route path='/' element={<Transactions/>}/>
                <Route path="/Transactions" element={<Transactions/>}/>
                <Route path="/Deposit" element={<Deposit/>}/>
                <Route path="/Withdraw" element={<Withdraw/>}/>
            </Routes>
            </div>
           
        </Fragment>
       
    );
};