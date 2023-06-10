import axios from "axios";
import { Chart,BarElement, CategoryScale, Legend, LinearScale, Tooltip } from "chart.js";
import { Bar } from "react-chartjs-2";
import { useEffect, useState } from "react";
import Navfoot from "./navfoot";
import Footer from "./foot";

Chart.register(
    BarElement,CategoryScale,LinearScale,Tooltip,Legend
)
const counting=async() => {
    return await axios.get('https://techprimes.onrender.com/count')
}
const MobDashboard=()=>{
    const [c,setc]=useState({count:0,closecount:0,running:0,cancelled:0,
    clouser:0,strategy:0,strategyclose:0,finance:0,financeclose:0,qaulity:0,
    qaulityclose:0,maintanance:0,maintananceclose:0,store:0,storeclose:0,
    hr:0,hrclose:0,})
    useEffect(()=>{
        counting().then((res)=>setc(res.data))
    },[])
    let data ={
        labels:[[Math.floor((c.strategyclose/c.strategy)*100)+"%"," ","STR"],
    [Math.floor((c.financeclose/c.finance)*100)+"%"," ","FIN"],
    [Math.floor((c.qaulityclose/c.qaulity)*100)+"%"," ","QLT"],
    [Math.floor((c.maintananceclose/c.maintanance)*100)+"%"," ","MAINT"],
    [Math.floor((c.storeclose/c.store)*100)+"%" ," ","STORE"],
    [Math.floor((c.hrclose/c.hr)*100)+"%"," ","HR"]],
    setsdata:[{
        label:"Total",
        data:[c.strategy,c.finance,c.qaulity,c.maintanance,c.store,c.hr],
        backgroundcolor:'blue',
        borderRadius:10,
    },
       {label:"Closed",
       data:[c.strategyclose,c.financeclose,c.qaulityclose,c.maintananceclose,c.storeclose,c.hrclose],
       backgroundcolor:'green',
        borderRadius:10,
    }]
    }
    return (
        
        <div id="mob1">
            <Navfoot />
            <div id="mob1">
                <div id="mob">
                    <div id="mob2">
                        <div className="mob1">
                            <div className="mob2"></div>
                            <div className="mob3">
                                <p className="mobtittle">Total Projects</p>
                                <p className="mobnum">{c.count}</p>
                            </div>
                        </div>
                    <div className="mob1">
                            <div className="mob2"></div>
                            <div className="mob3">
                                <p className="mobtittle">Closed</p>
                                <p className="mobnum">{c.closecount}</p>
                            </div>
                        </div>
                        <div className="mob1">
                            <div className="mob2"></div>
                            <div className="mob3">
                                <p className="mobtittle">Running</p>
                                <p className="mobnum">{c.running}</p>
                            </div>
                        </div>
                        <div className="mob1">
                            <div className="mob2"></div>
                            <div className="mob3">
                                <p className="mobtittle">Closer Delay</p>
                                <p className="mobnum">{c.clouser}</p>
                            </div>
                        </div>
                        <div className="mob1">
                            <div className="mob2"></div>
                            <div className="mob3">
                                <p className="mobtittle">Cancelled</p>
                                <p className="mobnum">{c.cancelled}</p>
                            </div>
                        </div>
                </div>
                <div id="mob3"><p>Department wise - Total vs closed</p></div>
               <div id="mob4">
               <Bar 
               data={data}
               width={"120px"}
               ></Bar>
               </div>
            </div>

        </div>
        <Footer />
        </div>
    )
}
export default MobDashboard