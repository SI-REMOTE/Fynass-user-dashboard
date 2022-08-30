import React from "react";
import css from '../css/wallet.module.css';
import image from '../images/wallet.png'

const Home = () => {
    return(
        <div className={css.dboard} >
            <div className={css.dboard2} >
               <div>
                   <h1>WALLET</h1>
                    <h5>You Can Access Your Account Balance and Fund Details Here.</h5>
               </div>
               <img className={css.ig} src={image} alt=""/>
           </div>
        </div>
    );
};
export default Home;