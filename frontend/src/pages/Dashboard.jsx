import { useState,useEffect } from "react"
import { Appbar } from "../components/Appbar"
import { Balance } from "../components/Balance"
import { Users } from "../components/Users"
import "./home.css"
import axios from "axios"

export const Dashboard = () => {
    const [balance, setBalance] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:3000/api/v1/account/balance", {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        })
        .then(response => {
            const formattedBalance = parseFloat(response.data.balance).toFixed(2);
            setBalance(formattedBalance);
        })
        .catch(error => {
            console.error("Error fetching balance", error);
        });
    }, []);


    return (
        <div className="mainn" >
            <Appbar />
            <div className="m-8 ">
                {balance !== null ? (
                    <Balance value={balance} />
                ) : (
                    <p className="text-white">Loading...</p>
                )}
                <Users />
            </div>
        </div>
    );
  
}