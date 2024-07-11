"use client"; 

import { auth, db } from "@/firebase/config";
import { signOut } from "firebase/auth"
import { onValue, push, ref } from "firebase/database";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Room() {
    const router = useRouter()
    const [rooms, setRooms] = useState<{[key:string]: string}>({})

    useEffect(() => {
        const refs = ref(db, "rooms")
        onValue(refs, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                setRooms(data)
            }
        })
    }, [])

    const handleLogOut = async () => {
        await signOut(auth);
        router.push("/login")
    }

    const handleCreateButton = async () => {
        push(ref(db, "rooms"), "Test Title123")
    }
    
    return (
        <div className="flex flex-col h-screen items-center justify-center bg-gray-100">
        <button onClick={handleLogOut} className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-700 transition duration-300 mb-12">Sign Out</button>
        <h2 className="text-black text-2xl font-bold mb-6">Select a room</h2>
        <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300 mb-12" onClick={handleCreateButton}>Or, create a new room</button>
        <ul className="bg-white shadow p-4 rounded-xl w-full max-w-md">
            {Object.keys(rooms).map((roomId) => (
                <li key={roomId} className="mb-2">
                    <button className="bg-gray-100 py-2 px-4 rounded-lg w-full hover: bg-gray-300 transition duration-300 "
                    onClick={() => {
                        router.push('/room/${roomId}')
                    }}
                    >{rooms[roomId]}</button>
                </li>
            ))}
        </ul>
        </div>
    )
}