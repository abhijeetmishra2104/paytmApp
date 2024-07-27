import { Link } from "react-router-dom";


export function Button({label,onClick}){
    return <div className="flex justify-center">
    
    <button onClick={onClick} className="bg-[#201E43] hover:bg-[#508C9B] text-[#EEEEEE] font-bold py-2 px-4 border border rounded w-72">
      {label} 
    </button>
    
  </div>
  
}