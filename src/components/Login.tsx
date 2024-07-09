import { auth } from "@/firebase/config"
import { signInAnonymously } from "firebase/auth"

export default function Login() {
    return (
        <div className="flex h-screen items-center justify-center bg-gray-100">
            <div className="bg-white shadow p-8 rounded-xl">
                <h2 className="text-center text-2xl font-bold mb-8">Welcome to Chat</h2>
            <button className="w-full bg-blue-500 text-white font-bold py-2 rounded hover:bg-blue-700 transition duration-300" onClick={() => {
                signInAnonymously(auth).catch((err) => {
                    console.log(err)
                })
            }}>
                Sign-in Anonymously
            </button>
            </div>
        </div>
    )
}