import axios from 'axios';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom'

export default function Output() {
    const navigator = useNavigate();
    const [data, setData] = useState([]);

    const getData = ()=>{
        axios.get("https://code-output-node.vercel.app/codes").then(res=>{
            setData(res.data);
        }).catch(err=>{
            toast.error("Error");
            console.log(err)
        })
    }

    useEffect(()=>{
        getData();
    },[])
    return (
    <div className='outputContainer'>
        <button onClick={()=>navigator('/')} className='custom-btn btn-2'>Back</button> 
        <h1>All Submitions</h1>
        <table>
            <tr>
                {/* <th>Sno.</th> */}
                <th>Username</th>
                <th>Language</th>
                <th>Code</th>
                <th>Timestamp</th>
                <th>StdIp</th>
                {/* <th>StdOut</th> */}
            </tr>
            <tbody>
                {
                    data?.map((e,index)=>{
                        let first100Chars =e?.Code;
                        if(first100Chars.length > 100){
                            first100Chars = e?.Code.substring(0, 100);
                            first100Chars += " ..."
                        }else{
                            first100Chars = e.Code;
                        }
                        let lang = "C++";
                        switch(e?.Language){
                            case 54 : lang = "C++"; break;
                            case 91 : lang = "Java"; break;
                            case 92 :lang = "Python"; break;
                            case 93 :lang = "JavaScript"; break;
                        }

                        const date = new Date(e.Timestamp);
                        const hours = date.getHours() % 12; 
                        const minutes = date.getMinutes().toString().padStart(2, '0'); 
                        const meridian = date.getHours() >= 12 ? 'PM' : 'AM';
                        const formattedTime = `${hours}:${minutes} ${meridian} ${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
                        

                        return(
                        <tr key={index}>
                            <td>{e.Username}</td>
                            <td>{lang}</td>
                            <td>{first100Chars}</td>
                            <td>{formattedTime}</td>
                            <td>{e?.StdIp}</td>
                            {/* <td>Hello world</td> */}
                        </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
