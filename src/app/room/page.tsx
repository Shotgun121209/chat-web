"use client"; 

import { auth } from "@/firebase/config";
import { signOut } from "firebase/auth"
import { useRouter } from "next/navigation";

export default function Room() {

    const router = useRouter()

    const handleLogOut = async () => {
        await signOut(auth);
        router.push("/login")
    }
    
    return (
        <div>
        <div> Room Page (WIP) </div>
        <button onClick={handleLogOut}>Sign Out</button>
        </div>
    )
}