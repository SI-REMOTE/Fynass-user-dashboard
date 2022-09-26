import React from "react";
import css from '../css/dashboard.module.css';
import bankImg2 from '../images/bank2.png';
import wallet from '../images/wallet.png';
import data from '../images/data.png'
import bills from '../images/bills.png'
import image from '../images/images.png'
const Dashboard = () => {
    return(
        <div className={css.dboard}>
           <div className={css.dboard2} >
               <img className={css.ig} src={image} alt=""/>
                <div>
                   <h1>Dashboard</h1>
                    <h5>below is the summary of your activities on user portal </h5>
               </div>
           </div>
           <div className={css.div2}></div>
           <div>
               <div>
                   <p>
                       <img src={bankImg2} alt=""/>
                       <span>Bank</span>
                   </p>
                   <div>
                       <div>
                           <span>Banks linked</span>
                           <span>0</span>
                       </div>
                   </div>
               </div>
               <div>
                   <p>
                     <img src={wallet} alt=""/>
                       <span>Wallet</span>
                   </p>
                   <div>
                      <ul>
                            <li>TOTAL BALANCE: <span>0</span></li>
                            <li>AVAILABLE BALANCE: <span> 0</span></li>
                      </ul>       
                  </div>
              </div>
               <div>
                  <p>
                     <img src={data} alt=""/>
                       <span>Airtime to Cash</span>
                   </p> 
                   <div>
                        <ul>
                            <li>CARD SOLD: <span>0</span></li>
                            <li>CARD PURCHASED <span>0</span></li>
                        </ul>
                 </div>
               </div>
               <div>
                  <p>
                     <img src={data} alt=""/>
                       <span>Buy Airtime/Data</span>
                   </p>
                   <div>
                      <ul className="ta-smallList ta-smallList2 ">
                         <li>AIRTME -&gt; CASH: <span>YES</span></li>
                         <li>DATA -&gt; CASH: <span>YES</span></li>
                        </ul>
                 </div>
               </div>
               <div>
                  <p>
                     <img src={bills} alt=""/>
                       <span>PayBills</span>
                   </p>
                   <div>
                        <div>
                             <span>TOTAL TRANSACTION:</span><span>0</span>    
                         </div>
                    </div>
               </div>
           </div>

        </div>
    );
};
export default Dashboard;