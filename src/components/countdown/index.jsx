import React, {useState, useEffect} from "react";

export function Countdown() {
    const [days, setDays] = useState();
    const [hours, setHours] = useState();
    const [minutes, setMinutes] = useState();
    const [seconds, setSeconds] = useState();

    useEffect(()=> {
        countdown('02/01/2024 05:00:00 PM'); 
    })

    function countdown(endDate) {
        let days, hours, minutes, seconds = 0;
        
        endDate = new Date(endDate).getTime();
        
        if (isNaN(endDate)) {
          return;
        }
        
        setInterval(calculate, 1000);
        
        function calculate() {
          let startDate = new Date().getTime();
          
          let timeRemaining = parseInt((endDate - startDate) / 1000);
          
          if (timeRemaining >= 0) {
            days = parseInt(timeRemaining / 86400);
            timeRemaining = (timeRemaining % 86400);
            
            hours = parseInt(timeRemaining / 3600);
            timeRemaining = (timeRemaining % 3600);
            
            minutes = parseInt(timeRemaining / 60);
            timeRemaining = (timeRemaining % 60);
            
            seconds = parseInt(timeRemaining);
         
            setDays(parseInt(days, 10));
            setHours(hours < 10 ? "0" + hours : hours);
            setMinutes(minutes < 10 ? "0" + minutes : minutes);
            setSeconds(seconds < 10 ? "0" + seconds : seconds)
        
          } 
        }
      }

    return (<div className="flex gap-5 justify-center mt-5 mb-5">
    <div>
      <span className="countdown font-mono text-4xl">
          <span style={{"--value": days}}></span>
      </span>
      days
    </div> 
    <div>
      <span className="countdown font-mono text-4xl">
          <span style={{"--value": hours}}></span>
      </span>
      hours
    </div> 
    <div>
      <span className="countdown font-mono text-4xl">
        <span style={{"--value": minutes}}></span>
      </span>
      min
    </div> 
    <div>
      <span className="countdown font-mono text-4xl">
        <span style={{"--value": seconds}}></span>
      </span>
      sec
    </div>
  </div>)
}