import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { unstable_concurrentAct } from "react-dom/test-utils";


const useNetwork = onChange => {
    //useNetwork가 할 일은 network 상태가 바뀔 때 마다 function을 부르는 것이다.   
    const [status, setStatus] = useState(navigator.onLine)
    /*기본값으로 navigator.online을 설정하고 navigator.online은 true 또는
      false를 말할 것이다.(online인지 아닌지)
       navigator가 online이면 현재의 status를 줄것이다. */
    const handleChange = () => {
        if (typeof onChange === "function") {
            onChange(navigator.onLine)

        }
        setStatus(navigator.onLine)
    }
    useEffect(() => {
        window.addEventListener("online", handleChange);
        window.addEventListener("offline", handleChange);
        return () => {
            window.removeEventListener("online", handleChange);
            window.removeEventListener("offline", handleChange);
        }
    }, [])
    return status;
}

const App = () => {
    const handleNetworkChange = (online) => {
        console.log(online ? "we just went onlie" : "we are offline")
    }
    const onLine = useNetwork(handleNetworkChange)

    return (
        <div>
            <h2>{onLine ? "Online" : "Offline"}</h2>

        </div>
    )
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);