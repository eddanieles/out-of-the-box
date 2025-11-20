"use client"
import BeefreeSDK from "@beefree.io/sdk"
import { useEffect } from "react"

const beefreeConfig = {
    container: "beefree_container",
    language: "es-ES"
}

export default function Page() {
    useEffect(() => {
        fetch("https://auth.getbee.io/loginV2", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                client_id: process.env.NEXT_PUBLIC_BEEFREE_EMAIL_CLIENT_ID,
                client_secret: process.env.NEXT_PUBLIC_BEEFREE_EMAIL_CLIENT_SECRET,
                uid: "demo-user"
            })
        })
            .then(response => response.json())
            .then(result => {
                let beefreeInstance = new BeefreeSDK(result);
                beefreeInstance.start(beefreeConfig, {})
            })
            .catch(error => {
                console.error('Error:', error);
            })
    })

    return (
        <div style={{backgroundColor:"red"}}>
            foobar
            <div><input type="file" /></div>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <div id="beefree_container" style={{ height: "1000px" }}></div>
            </div>
        </div>
    )
}