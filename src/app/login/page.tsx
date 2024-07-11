"use client"

import { auth } from "@/firebase/config"
import { createUserWithEmailAndPassword, signInAnonymously, signInWithEmailAndPassword } from "firebase/auth"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function Login() {

    const [email, setEmail] = useState("")
    const [pwd, setPwd] = useState("")
    const [pwdValid, setPwdValid] = useState("")
    const [signUp, setSignUp] = useState(false);
    const router = useRouter()

    const handleSignInSubmit = async (e: React.FormEvent) => {
        //Sign In Sequence
        e.preventDefault();
        try {
            //Login w/ firebase
            await signInWithEmailAndPassword(auth, email, pwd)
            //Go to /room
            router.push("/room")
        } catch (err) {
            console.log(err);
        }
    }
 
    const handleSignUpSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (pwd != pwdValid) {
            alert("Password and Password confirm not equal")
            return;
        }
        try {
            //Login w/ firebase
            await createUserWithEmailAndPassword(auth, email, pwd)
            //Go to /room
            router.push("/room")
        } catch (err) {
            console.log(err);
        }
    }

    if (signUp) {
        return (
                <div className="flex h-screen items-center justify-center bg-gray-100">
                    <form className="bg-white shadow p-8 rounded-xl w-full max-w-md" onSubmit={handleSignUpSubmit}>
                        <h2 className="text-center text-2xl font-bold mb-8 text-black">Sign Up to Chat</h2>
                    <input className="border border-gray-400 w-full mb-4 py-2 px-3 rounded" type="email" value={email} placeholder="Enter an email" onChange={(e) => setEmail(e.target.value)} />
                    <input className="border border-gray-400 w-full mb-4 py-2 px-3 rounded" type="password" value={pwd} placeholder="Enter a password" onChange={(e) => setPwd(e.target.value)} />
                    <input className="border border-gray-400 w-full mb-4 py-2 px-3 rounded" type="password" value={pwdValid} placeholder="Confirm password" onChange={(e) => setPwdValid(e.target.value)} />
                    <button type="submit" className="w-full bg-blue-500 text-white font-bold py-2 rounded hover:bg-blue-700 transition duration-300">
                        Sign Up
                    </button>
                    <button
                    className="mt-3 text-black" 
                    onClick={() => {
                    setSignUp(false);
                    setEmail("")
                    setPwd("")
                    setPwdValid("")
                }}>Go To Sign In Page</button>
                    </form>
                </div>
        )
    } else {
        return (
            <div className="flex h-screen items-center justify-center bg-gray-100">
                <form className="bg-white shadow p-8 rounded-xl w-full max-w-md" onSubmit={handleSignInSubmit}>
                    <h2 className="text-center text-2xl font-bold mb-8 text-black">Welcome to Chat</h2>
                <input className="border border-gray-400 w-full mb-4 py-2 px-3 rounded" type="email" value={email} placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} />
                <input className="border border-gray-400 w-full mb-4 py-2 px-3 rounded" type="password" value={pwd} placeholder="Enter your password" onChange={(e) => setPwd(e.target.value)} />
                <button type="submit" className="w-full bg-blue-500 text-white font-bold py-2 rounded hover:bg-blue-700 transition duration-300">
                    Sign-in with email
                </button>
                <button 
                className="mt-3 text-black" 
                onClick={() => {
                    setSignUp(true);
                    setEmail("")
                    setPwd("")
                }}>Go To Sign Up Page</button>
                </form>
            </div>
        )
    }
}