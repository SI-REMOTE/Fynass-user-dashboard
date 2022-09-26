import React,{Fragment,createContext, useState} from "react";
import Sidebar from "./components/sidebar";
import {Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboards";
import {Bank,AddBank, ViewBank }from "./pages/Bank";
import {Wallet} from "./pages/wallet";
import Paybills from "./pages/paybills";
import AirtimeToCash from "./pages/airtime-to-cash";
import {AirtimeAndData, Airtime,Data} from "./pages/airtime-and-data";
import Navbar from "./components/navbar";

export const SideWidthContext = createContext()

const Page = () => {
    const [isOpen,setIsOpen] = useState(true);
    return(
     <SideWidthContext.Provider value={{isOpen,setIsOpen}}>
        <div className="main-container">
            <Sidebar/>
            <div style={isOpen?{width:'calc(100% - 250px)'}:{width:'calc(100% - 50px)'}} className='parentContainer'>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Dashboard/>}/>
                    <Route path="/bank/*" element={<Bank/>}/>
                    <Route path="/wallet/*" element={<Wallet/>}/>
                    <Route path="/airtime-to-cash" element={<AirtimeToCash/>}/>
                    <Route path="/paybills" element={<Paybills/>}/>
                    <Route path="/airtime-and-data" element={<AirtimeAndData/>}/>
                    <Route path="/airtime-and-data/Airtime" element={<Airtime/>}/>
                    <Route path="/airtime-and-data/Data" element={<Data/>}/>
                </Routes>
            </div>
        </div>
     </SideWidthContext.Provider>
   
        

            
            
       
    );
};
export default Page;