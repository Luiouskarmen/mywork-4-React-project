import React, { useEffect } from 'react'
import { useState } from 'react'

import axios from 'axios'
function Fff(){
    const [url,setUrl]=useState("")
    useEffect(()=>{
        axios.get("https://tea.qingnian8.com/tools/taoShow").then((res)=>{
            console.log(res.data.data[0].url)
            setUrl(res.data.data[0].url)
            
        })
    },[])

    return (
        <div>
            <h1>Fff</h1>
            <img src={url} alt="hhh" />
        </div>
    )
}
export default Fff