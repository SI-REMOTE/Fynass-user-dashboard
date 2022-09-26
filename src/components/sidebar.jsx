import React, { useState,useEffect,useContext } from "react";
import css from '../css/sidebar.module.css';

import * as AiIcons from "react-icons/ai";
import SubMenu from "./submenu";
import {
    FaTh,
    FaBars,
    FaWallet,
    FaClone
}from "react-icons/fa";
import {BsBank2} from 'react-icons/bs';
import {MdPayment, MdArrowDropDown,  MdArrowDropUp} from 'react-icons/md';
import{TbCash} from 'react-icons/tb';
import { NavLink,Link,useLocation } from "react-router-dom";
import { SideWidthContext } from "../Page";
import Logo from "../images/logo.png";

const Sidebar = () => {
    const{isOpen ,setIsOpen} = useContext(SideWidthContext);
    const [activeMenuLink,setActiveMenuLink] = useState(0);
    const toggle = () => setIsOpen(!isOpen);
    const location = useLocation();
    const [activeSideLink, setActiveSideLink] = useState(0);
    const [sideStatus,setSideStatus] = useState(false);
    const [sideCnt,setSideCnt] = useState(0)

 
    const menuItem=[
        {
        path:"/",
        name:"dashboard",
        icon:<FaTh/>
        },
        {
        path:"/wallet",
        name:"Wallet",
        icon:<FaWallet/>,
        iconClose:<MdArrowDropDown />,
        iconOpen:<MdArrowDropUp/>,
        subNav: [
            {
                path:"/wallet/Transactions",
                name:"Transactions",
                icon:<FaWallet/>
            },
            {
                path:"/wallet/Deposit",
                name:"Deposit",
                icon:<FaWallet/>
            },
            {
                path:"/wallet/Withdraw",
                name:"Withdraw",
                icon:<FaWallet/>
            }
        ]
        },  
        {
            path:"/bank",
            name:"Bank",
            icon:<BsBank2/>,
            iconClose:<MdArrowDropDown />,
            iconOpen:<MdArrowDropUp/>,
        subNav: [
            {
                path:"/bank/Add-bank",
                name:"Add-Bank",
                icon:<FaWallet/>
            },
            {
                path:"/bank/View-bank",
                name:"View-bank",
                icon:<FaWallet/>
            },
           
        ]
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
          iconClose:<MdArrowDropDown />,
          iconOpen:<MdArrowDropUp/>,
        subNav: [
            {
                path:"/airtime-and-data/Airtime",
                name:"Airtime",
                icon:<FaClone/>
            },
            {
                path:"/airtime-and-data/Data",
                name:"Data",
                icon:<FaWallet/>
            },
        ]
        },
       
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
       setActiveMenuLink(activeMenuIndex);
     },[location.pathname])


     useEffect(()=>{
         setSideCnt(0)
     },[activeSideLink])
     useEffect(()=>{
         if(sideCnt == 0){
            setSideStatus(true);
         }
         else{
              setSideStatus(!sideStatus);
         }
     },[sideCnt])


     useEffect(()=>{
         let locationIndex = location.pathname;
         locationIndex = locationIndex.split('/');
         locationIndex = locationIndex[locationIndex.length -1];
         if(!locationIndex){
             setActiveSideLink(0);
         }
         else{
             let newIndex = 0;
             menuItem.forEach((menu,ind)=> {
                 if(menu.path.toLowerCase().search(locationIndex) != -1){
                    newIndex = ind;
                 }
             })
             //console.log(newIndex)
             setActiveSideLink(newIndex);
             setSideCnt(1);
         }
         

     },[])
  
      
    return(
        <div className={css.container}>
            <div style={{width: isOpen ? "250px" : "50px"}} className={css.sidebar}>
               <div className={css.top_section}>
                  <h1 style={{display: isOpen ? "block" : "none"}} className={css.logo}><img src={Logo} width='100px'/></h1>
                  <div style={{marginLeft: isOpen ? "90px" : "0px"}} className={css.bars}>
                      <FaBars onClick={toggle}/>
                  </div>
               </div>
               {
                   menuItem.map((item, index)=>( 
                       <div key={index} >
                            <NavLink to={item.path}  className={`${css.link} ${activeMenuLink === index ?css.active: ''}`} onClick={()=>{activeSideLink != index?setActiveSideLink(index):setSideCnt(sideCnt+1)}}  >
                                <div className={css.icon}>{item.icon}</div>
                                <div style={{display: isOpen ? "block" : "none"}} className={css.link_text}>{item.name}</div>
                            </NavLink>
                            {item.subNav && item.subNav.length > 0 && activeMenuLink == index && sideStatus ? <div className={css.subn}>
                                    <SubMenu item={item} />
                                </div>:<></>}
                       </div>
                   ))
               }
             <div >
                
             </div>
             
          </div>
        </div>
        
    );
};
export default Sidebar;