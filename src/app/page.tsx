"use client"

import Login from "@/components/Login";
import SimpleChat from "@/components/SimpleChat";
import { auth } from "@/firebase/config";
import { User, onAuthStateChanged } from "firebase/auth";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {

  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (newUser) => {
      setUser(newUser);
    });

    return () => {
      unsub();
    }

  }, [])

  return <main>
    {user ? <SimpleChat /> : <Login />}
    <SimpleChat />
  </main>
}
