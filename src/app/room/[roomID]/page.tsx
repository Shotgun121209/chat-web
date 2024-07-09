"use client"

export default function Chat({params} : {params:{roomID: string}}) {

    return <div>{params.roomID}</div>

}