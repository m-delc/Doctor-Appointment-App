import React from "react";
import AptCard from "../AptCard/AptCard";


function Appointments({user, appointments, setAppointments}) {



return(

    <div className = "appt-cont">
        {user ? (  
        <>
        <h1>{user.first_name}'s Appointments</h1> 
        <h3>Below is a list of your current doctor appointments. <br />  Update any appointment information prior to the appointment date <br /> or cancel if need be. </h3>

        <ul className="cards">
      {appointments.map((appointment) => (
        <AptCard key={appointment.id} user ={user} appointment = {appointment} setAppointments = {setAppointments} appointments={appointments} />
      ))}
    </ul>

        </>
        
        
        
        
         ) : null }



    </div>
)


}

export default Appointments;