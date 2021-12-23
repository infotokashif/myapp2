import React,{useState} from "react";


export const Digitalwatch = () =>{

    let time = new Date().toLocaleTimeString();

    const [ctime,setCtime] = useState(time);
  
    const handletime=()=>{
  
      time= new Date().toLocaleTimeString();
      setCtime(time);
    }
  
   setInterval(handletime,1000);

    return(
        <div>

            <h1>{time}</h1>
            <h2>This is Digital watch made by me </h2>
            

        </div>
    )
}