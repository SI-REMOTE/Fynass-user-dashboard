import React, { useContext,useState } from "react";
import css from'../css/navbar.module.css';
import{
    FaUser,
    FaRegBell,
} from "react-icons/fa";
import { SideWidthContext } from "../Page";
const Navbar = () =>{
    const {isOpen}  = useContext(SideWidthContext);
    const [showNotifications,setShowNotifications] = useState(false);
    const [showLogOut,setShowLogOut] = useState(false);

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
    return(
        <div className={css.navbar} >
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
    )
}
export default Navbar;