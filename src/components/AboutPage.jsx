import { useState } from "react";

export const AboutPage = () => {
    const [ data ,setter ] = useState(0)
    const [name, setName] = useState("")
    return (
    <div>
        <input value={name} onChange={(event)=>{
                console.log(event)
                setName(event.target.value)
            }} />

        <p>{data}</p>
        <button onClick={()=>{
                console.log(`before : ${data}`)
                setter((prv)=>prv+1)
                alert(name)
                console.log(`After : ${data}`)
            }}>Hai</button>
    </div>
  )
}

