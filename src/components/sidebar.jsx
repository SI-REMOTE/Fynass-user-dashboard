import React, { useState,useEffect,useContext } from "react";
import css from '../css/sidebar.module.css';

import {
    FaTh,
    FaBars,
    FaWallet,
    FaClone

}from "react-icons/fa";
import {MdPayment,} from 'react-icons/md';
import{TbCash} from 'react-icons/tb';
import { NavLink,Link,useLocation } from "react-router-dom";
import { SideWidthContext } from "../Page";

const Sidebar = () => {
    const{isOpen ,setIsOpen} = useContext(SideWidthContext);
    const [activeMenuLink,setActiveMenuLink] = useState(0);
    const toggle = () => setIsOpen(!isOpen);
    const location = useLocation();

    const menuItem=[
        {
        path:"/",
        name:"dashboard",
        icon:<FaTh/>
        },
        {
        path:"/wallet",
        name:"Wallet",
        icon:<FaWallet/>
        },
        {
        path:"/paybills",
        name:"Paybills",
        icon:<MdPayment/>
        },
        {
        path:"/airtime-to-cash",
        name:"AirtimeToCash",
        icon:<TbCash/>,
        },
        {
         path:"/airtime-and-data",
         name:"AirtimeAndData",
         icon:<FaClone/>,
         }
    ]



     useEffect(()=>{
         let activeMenuIndex = 0;
       if(location.pathname !== '/'){
            let i ;
            let len = menuItem.length;
            for(i = 1;i<len;i++){
                const element = menuItem[i];
                if(location.pathname.slice(1).search(element.path.slice(1)) != -1){
                    activeMenuIndex = i;
                    break;
                }
            }
       }
    //    console.log(activeMenuIndex)
       setActiveMenuLink(activeMenuIndex)
     },[location.pathname])

    return(
        <div className={css.container}>
            <div style={{width: isOpen ? "250px" : "50px"}} className={css.sidebar}>
               <div className={css.top_section}>
                  <h1 style={{display: isOpen ? "block" : "none"}} className={css.logo}>Logo</h1>
                  <div style={{marginLeft: isOpen ? "50px" : "0px"}} className={css.bars}>
                      <FaBars onClick={toggle}/>
                  </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className={`${css.link} ${activeMenuLink === index ?css.active: ''}`}  >
                           <div className={css.icon}>{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className={css.link_text}>{item.name}</div>
                       </NavLink>
                   ))
               }
                 <nav className="navBar"></nav>
            </div>
        </div>
        
    );
};
export default Sidebar;