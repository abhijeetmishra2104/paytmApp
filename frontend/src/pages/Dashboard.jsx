import { AppBar } from "../components/AppBar"
import { Balance } from "../components/Balance"
import { Users } from "../components/Users"

export const Dashboard = () => {
    const name = localStorage.getItem("name");
    return <div className="bg-[#134B70] min-h-screen">
        <AppBar name = {name} />
        <div className="m-8">

            <Balance  />
            <Users />
        </div>
    </div>
}