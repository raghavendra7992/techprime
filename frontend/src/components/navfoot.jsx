import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { Auth } from "../authentication/authentication";
import Header from "../assigment-assest/Header-bg.svg"
import Logout from "../assigment-assest/Logout.svg"

import "./dashboard.css"

const Navfoot=()=>{
    const navigate=useNavigate();
    const {lg}=useContext(Auth)
    const tologout=()=>{
        lg()
        setTimeout(()=>navigate("/"),500)
    }
    return (
        <div id="nf">
            <div id="nav">
                <img nfimg src={Header} alt={Header} />
                <div id="nfdiv">
                    <div><p id="nfp">
                        {"<Project listing"}</p></div>
                        <div id="nflg">
                            <img onClick={tologout} src={Logout} alt={Logout}/>
                        </div>
                    
                </div>
            </div>
        </div>
    )
}
export default Navfoot;