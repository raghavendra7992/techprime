import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { Auth } from "../authentication/authentication"
import active from "../assigment-assest/Dashboard-active.svg"
import assestunactive from "../assigment-assest/Dashboard.svg"
import pjlist from "../assigment-assest/Project-list-active.svg"
import pjunactivelist from "../assigment-assest/Project-list.svg"
import pjcreate from "../assigment-assest/create-project-active.svg"
import unactivepjcreate from "../assigment-assest/create-project.svg"
import lglogo from "../assigment-assest/Logout.svg"

const Sidebar=({pathname})=>{
    const nav=useNavigate()
    const {logout}=useContext(Auth)
    const todashboard=()=>{
        setTimeout(()=>nav("/dashboard"),100)
    }
    const tolist=()=>{
        setTimeout(()=>nav("/list"),100)

    }
    const toprojection=()=>{
        setTimeout(()=>nav("/project"),100)
    }
    const tologout=()=>{
        logout()
        setTimeout(()=>nav("/"),100)
    }
    return (
        <div id="sb">
            <div id="sb1">
                <div className="sb2">
                    {pathname==='/dashboard'?<img
                     onclick={todashboard} 
                    src={active}
                 alt={active}/> : <img onClick={todashboard} 
                 src={assestunactive} 
                 alt={assestunactive}/>}
                </div>
                <div className="sb2">
                    {pathname==='/list'?<img
                     onclick={tolist} 
                    src={pjlist}
                 alt={pjlist}/> : <img onClick={tolist} 
                 src={pjunactivelist} 
                 alt={pjunactivelist}/>}
                </div>
                 <div className="sb2">
                    {pathname==='/project'?<img
                     onclick={toprojection} 
                    src={pjcreate}
                 alt={pjcreate}/> : <img onClick={toprojection} 
                 src={unactivepjcreate} 
                 alt={unactivepjcreate}/>}
                </div>
                
            </div>
            <div id="sb3">
                <img onclick={tologout} src={lglogo} alt={lglogo}/>
            </div>

        </div>
    )
}
export default Sidebar