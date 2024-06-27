import { useEffect, useState } from "react"
import { ref, set, onValue } from "firebase/database";
import { db } from "@/firebase/config"

export default function ColorChanger() {
    const [color, setColor] = useState("#ffffff")
    
    useEffect(() => {
        //Connect to Firebase DB
        const colorRef = ref(db, "color");
        onValue(colorRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                setColor(data);
            }
        })
    }, [])

    const handleButtonClick = () => {
        const newColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
        const dbRef = ref(db, "color");
        set(dbRef, newColor);
    };

    return (
        <div style={{
            background: color,
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <button onClick={handleButtonClick}>Change Color</button>
        </div>
    )
}