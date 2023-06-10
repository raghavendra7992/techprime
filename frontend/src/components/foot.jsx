import "./dashboard.css"
import active from "../assignment-assest/Dashboard-active.svg"
import unactive from "../assignment-assest/Dashboard.svg"
import List from "../assignment-assest/Project-list-active.svg"
import unList from "../assignment-assest/Project-list.svg"
import Project from "../assignment-assest/create-project-active.svg"
import unProject from "../assignment-assest/create-project.svg"
import { useNavigate } from 'react-router-dom'


const Footer = () => {
  const navigate=useNavigate()
  const todashboard=()=>{
      setTimeout(()=>navigate("/dashboard"),500)
  }
  const tolist=()=>{
      setTimeout(()=>navigate("/list"),500)
  }
  const toprojection=()=>{
      setTimeout(()=>navigate("/project"),500)
  }
  const pathname=window.location.pathname;

  return (
    <div id="f">
        <div id="fc">
                <div className='fdiv'>
                  {pathname==="/dashboard"?<img onClick={todashboard}  src={active} alt={active} />:<img onClick={todashboard} src={unactive} alt={unactive} />}
                </div>
                <div className='fdiv'>
                {pathname==="/list"?<img onClick={tolist} src={List} alt={List} />:<img onClick={tolist} src={unList} alt={unList} />}
                </div>
                <div className='fdiv'>
                {pathname==="/project"?<img onClick={toprojection} src={Project} alt={Project} />:<img onClick={toprojection} src={unProject} alt={unProject} />}
                </div>
    </div>
    </div>
  )
}

export default Footer