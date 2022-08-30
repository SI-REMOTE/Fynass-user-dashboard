import React, { useContext,useEffect,useState } from "react";
import css from'../css/navbar.module.css';
import{
    FaUser,
    FaRegBell,
} from "react-icons/fa";
import { SideWidthContext } from "../Page";
import { useLocation,Link } from "react-router-dom";
const Navbar = () =>{
    const {isOpen}  = useContext(SideWidthContext);
    const [showNotifications,setShowNotifications] = useState(false);
    const [showLogOut,setShowLogOut] = useState(false);
    const [pathArr,setPathArr] = useState(['/'])
    const location = useLocation();
    

    const handleNotification = () =>{
        if(showLogOut === true && showNotifications === false){
            setShowLogOut(false);
        }
        setShowNotifications(!showNotifications)
    }
    const handleAccount = () =>{
        if(showLogOut === false && showNotifications === true){
            setShowNotifications(false);
        }
        setShowLogOut(!showLogOut)
    }
   
    useEffect(() =>{
        let newPath = location.pathname;
        let len = newPath.split('/').length;
        let allPath = newPath.split('/');
        let newArr = ['/'];
        let i;
        for(i = 0;i<len;i++){
            if(allPath[i] == '' || allPath[i] == null || typeof allPath == 'undefined'){
               
            }
            else{
                newArr.push(allPath[i].toString())
            }
            
        }
        console.log(newArr);
        setPathArr(newArr)
    },[location])
    return(
   <div className={css.navba}>
        <div  className={css.navbar} >
            <div className={css.navbar1} >
              
              <div className={css.user}>
                <span>Rita</span>
                
              </div>
              <div className={css.user1}>
              <div>
                <FaUser onClick={()=>handleAccount()}/>
                {showLogOut && <div className={css.fauser}>Logout</div>}

             </div>
               <span >
                <FaRegBell onClick={()=>handleNotification()}/>
                {showNotifications && <div className={css.bell}>
                    <span>all notifications</span>
                    <span>unread notifications</span>
                </div>}
                </span>
              </div>
          </div>
      </div>
      <div  className={css.bar} >{pathArr && pathArr.length > 0 && pathArr.map((path,ind) => (<Link to={path==='/'?'/':`/${path}`}>{path==='/'?'Dashboard':path}{ind !== (pathArr.length-1)?` >> `:''}</Link>))}</div>
    </div>
  )
}
export default Navbar;