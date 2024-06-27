import { db } from "@/firebase/config";
import { onValue, push, ref } from "firebase/database";
import {useEffect, useState} from "react";

type Chat = {
    author: string;
    msg: string;
}

export default function SimpleChat() {
    const[messages, setMessages] = useState<Chat[]>([])
    const [newMessage, setNewMessage] = useState("")

    useEffect(() => {
        const chatRef = ref(db, "chat");
        onValue(chatRef, (snapshot) => {
            const data = snapshot.val()
            if (data) {
                setMessages(Object.values(data))
            }
        })
    }, [])

    const sendMessage = () => {
        if (newMessage.trim() != "") {
            push(ref(db, "chat")), {
                author: "user_test",
                msg: newMessage
            };
            setNewMessage("")
        }
    }

    return (
    <div>
        <div>
            <div>
                {messages.map((message, index) => (
                    <div key={index}>
                        <strong>{message.author}</strong>:
                        {message.msg}
                    </div>
                ))}
            </div>
            <div>
                <input type="text" value={newMessage} onChange={(e) => setNewMessage(e.target.value)} placeholder="Type your message"/>
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    </div>)
}