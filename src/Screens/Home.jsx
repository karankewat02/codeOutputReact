import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast';

export default function Home() {
  const navigator = useNavigate()
  const [code, setCode] = useState("");
  const [lang, setlang] = useState(54);
  const [stdin, setstdin] = useState("");
  const [username, setusername] = useState("");
  const handelSubmit = ()=>{
    axios.post("https://code-output-node.vercel.app/codes", {
      username:username,
      code:code,
      stdIn:stdin,
      language:lang
    }).then(res=>{
      toast.success("Submitted")
      console.log(res.data)
    }).catch(err=>{
      toast.error("Error");
      console.log(err)
    })
  }
  return (
    <div className='outputContainer'>
        <h1>Please Provide the details</h1>
        <div className="inputs">
          <div>
            <input type="text" placeholder='UserName' onChange={(e)=>setusername(e.target.value)} />
            <select placeholder="lanuage" onChange={(e)=>setlang(e.target.value)}>
                <option value={54}>C++</option>
                <option value={91}>Java</option>
                <option value={92}>Python</option>
                <option value={93}>JavaScript</option>
            </select>
          </div>
            <br />
            <textarea placeholder='Code' rows={20} onChange={(e)=>setCode(e.target.value)}/>
            <br />
            <textarea placeholder='StdIp' rows={10} onChange={(e)=>setstdin(e.target.value)}/>
            <br />
            <div style={{display:'flex', justifyContent:"space-between"}}>
              <button className='custom-btn btn-2' onClick={handelSubmit}>Submit</button>
              <button className='custom-btn btn-2' onClick={()=>navigator('/output')}>Submissions</button>
            </div>
        </div>
    </div>
  )
}
