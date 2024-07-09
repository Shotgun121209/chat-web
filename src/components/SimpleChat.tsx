import { db } from "@/firebase/config";
import { User } from "firebase/auth";
import { onValue, push, ref } from "firebase/database";
import { useEffect, useState } from "react";
import MessageBox from "./MessageBox";

type Chat = {
    author: string;
    msg: string;
}

type Props = {
    user: User
}

export default function SimpleChat({ user }: Props) {
    const [messages, setMessages] = useState<Chat[]>([]);
    const [newMessage, setNewMessage] = useState("");

    useEffect(() => {
        const chatRef = ref(db, "chat");
        onValue(chatRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                setMessages(Object.values(data));
            }
        });
    }, []);

    const sendMessage = () => {
        if (newMessage.trim() !== "") {
            push(ref(db, "chat"), {
                author: "Das22LR",
                msg: newMessage
            });
            setNewMessage("");
        }
    };

    return (
        <div>
            <div>
                {messages.map((message, index) => (
                    <MessageBox key={index} author={message.author} msg={message.msg} />
                ))}
            </div>
            <div>
                <input type="text" value={newMessage} onChange={(e) => setNewMessage(e.target.value)} placeholder="Type your message" />
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    );
}
