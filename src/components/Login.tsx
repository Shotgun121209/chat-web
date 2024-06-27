import { auth } from "@/firebase/config"
import { signInAnonymously } from "firebase/auth"

export default function Login() {
    return (
        <div>
            <button onClick={() => {
                signInAnonymously(auth).catch((err) => {
                    console.log(err)
                })
            }}>
                Sign-in
            </button>
        </div>
    )
}