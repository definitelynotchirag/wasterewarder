"use client";
import { useAuth } from "@clerk/nextjs";

export default function homepage(){
    const { isLoaded, userId, sessionId, getToken } = useAuth();

    if(!isLoaded || !userId){
        return (<h1>No User Logged In</h1>)
    }

    return(
        <div>
            Hello ,{userId} your session id is {sessionId}
        </div>
    )
}