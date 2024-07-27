import { Link } from "react-router-dom";


export function Alternative({accountState, action,pageToDirect}){
    return <div className="text-center text-[#EEEEEE]">
    
        {accountState} have an account? <Link to={pageToDirect}><u className="text-[#EEEEEE]">{action}</u></Link>
       
    </div>
}
