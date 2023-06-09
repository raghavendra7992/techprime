import axios from "axios";
import { Chart,BarElement, CategoryScale, Legend, LinearScale, Tooltip } from "chart.js";
import { useEffect, useState } from "react";
import Sidebar from "./sidebar";
import Head from "./head";

Chart.register(
    BarElement,CategoryScale,LinearScale,Tooltip,Legend
)
const counting=async() => {
    return await axios.get('https://techprimes.onrender.com/count')
}
const Dashboard=()=>{
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
        <>
        <div id="dp1">
            <div id="dp2"></div>
            <Sidebar pathname={window.location.pathname} />
            <div id="dp3"><Head/></div>
            <div id="dpinfo">
                <div className="dpi">
                    <div className="dpi1"></div>
                    <div className="dpi2">
                        <p className="tittle">Total Projects</p>
                        <p className="num">{c.count}</p>
                    </div>
                </div>
                <div className="dpi">
                    <div className="dpi1"></div>
                    <div className="dpi2">
                        <p className="tittle">Closed</p>
                        <p className="num">{c.closecount}</p>
                    </div>
                </div>
                <div className="dpi">
                    <div className="dpi1"></div>
                    <div className="dpi2">
                        <p className="tittle">Running</p>
                        <p className="num">{c.running}</p>
                    </div>
                </div>
                <div className="dpi">
                    <div className="dpi1"></div>
                    <div className="dpi2">
                        <p className="tittle">Clouser Delay</p>
                        <p className="num">{c.clouser}</p>
                    </div>
                </div>
                <div className="dpi">
                    <div className="dpi1"></div>
                    <div className="dpi2">
                        <p className="tittle">Cancelled</p>
                        <p className="num">{c.cancelled}</p>
                    </div>
                </div>

            </div>
            <p id="tcs">Department Wise -Total vs Closed</p>
            <div id=""></div>
        </div>
        </>
    )
}