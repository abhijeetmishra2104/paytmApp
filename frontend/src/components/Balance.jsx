import axios from "axios";
import { useEffect, useState } from "react";

export function Balance() {
    const [balance, setBalance] = useState(0);  
    useEffect(() => {
        const fetchBalance = async () => {
            try {
                const response = await axios.get("http://localhost:3000/api/v1/account/balance", {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`, 
                    }
                });
                setBalance(response.data.balance);  
            } catch (error) {
                console.error("Error fetching balance:", error);
                
            }
        };
        fetchBalance();
    }, []);

    return (
        <div>
            <h3 className="px-6 py-6 font-semibold text-xl text-[#EEEEEE]">
                Your Balance Rs {balance}
            </h3>
        </div>
    );
}
