import React, { useContext } from "react";
import css from'../css/navbar.module.css';
import{
    FaUser,
    FaRegBell,
} from "react-icons/fa";
import { SideWidthContext } from "../Page";
const Navbar = () =>{
    const {isOpen}  = useContext(SideWidthContext)
    return(
        <div className={css.navbar} >
            <div className={css.user}>
                <span>Rita</span>
                <FaUser />
                <FaRegBell/>
            </div>
            
        </div>
    )
}
export default Navbar;