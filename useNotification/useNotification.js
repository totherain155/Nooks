import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

const useNotification = (title, option) => {
    if (!("Notification" in window)) {
        return
    }
    const MakeNotif = () => {
        if (Notification.permission !== "granted") {
            Notification.requestPermission().then((permission) => {
                if (permission === "granted") {
                    new Notification(title, option)
                } else {
                    return;
                }
            })
        } else {
            new Notification(title, option)
        }
    }
    return MakeNotif;
}

const App = () => {
    const triggerNotif = useNotification("Hi", { body: "hi again" })
    return (
        <div>
            <button onClick={triggerNotif}>Hi</button>
        </div>
    )
}



const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);