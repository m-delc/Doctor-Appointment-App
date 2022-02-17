import React, {useState} from "react";
import "./AptCard.css"

function AptCard({ appointment, setAppointments, appointments, user}) {
    const [showForm, setShowForm] = useState(true)
    const [time, setTime] = useState("")
    const [date, setDate] = useState("")
    const [updateErrors, setUpdateErrors] = useState([])
    const [count, setCount] = useState(0)

    function handleClick() {
        setShowForm(!showForm)
        setUpdateErrors([])
        setCount(0)
     }

     function updateAppointment(e){
        e.preventDefault()
        
        const updatedInfo = {
            time: time,
            date: date
        }

        fetch(`/appointments/${appointment.id}`, {
            method:'PATCH',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(updatedInfo)
        })
        .then(res => {
            if(res.ok) {
                res.json()
                .then((updatedAppointment) => {
                    console.log(updatedAppointment)
                    const updatedAppointmentList = appointments.map((apt) => {
                        if(apt.id === appointment.id){
                            return updatedAppointment
                        }
                        else{return apt}
                    })

                    setAppointments(updatedAppointmentList)
                    setTime("")
                    setDate("")
                    setCount(0)
                    setUpdateErrors([])
                    alert(`Your appointment with Dr. ${appointment.doctor.name} has been rescheduled to ${updatedAppointment.time} on ${updatedAppointment.date}`)
                })
            } else {
                res.json()
                .then(json => setUpdateErrors(Object.entries(json.errors))
                )}
        })
     }

     function deleteAppointment() {

        if(count < 1){
            setCount(count + 1)
            alert(`${user.first_name}, you are about to cancel your appointment with Dr. ${appointment.doctor.name}, if this is your intention, please click the cancel button once more.`)
        }

        else {
            fetch(`/appointments/${appointment.id}`, {
                method: "DELETE"
            })
            .then(res => res)
            .then(() => {
                const updatedAppointmentList = appointments.filter((apt) => {return apt.id !== appointment.id})
                setAppointments(updatedAppointmentList)
                setCount(0)
                alert(`${user.first_name}, you have successfully cancelled your appointment with Dr. ${appointment.doctor.name} for ${appointment.time} on ${appointment.date}`)


            })
        }
         
     }



    return(
        <div className="apt-div">
        <li className = "card">
            <b><u><h2>Appointment with Dr. {appointment.doctor.name}:</h2></u></b>
            <p><b><u>Date:</u></b>  {appointment.date}</p>
            <p><b><u>Time:</u></b>  {appointment.time}</p>
            <p><b><u>Field:</u></b>  {appointment.doctor.field}</p>
            <p><b><u>Address:</u></b>  {appointment.doctor.address}</p>
            <p><b><u>Phone Number:</u></b> {appointment.doctor.number}</p>
            <p><b><u>Rating:</u></b> {appointment.doctor.rating} / 5</p>

            {
                showForm ? (
                    <div className = "button">
                    <button onClick ={handleClick}>Edit Appointment</button>
                    </div>
                ) : (
                    <div>
                        <form onSubmit={updateAppointment} className = "apt-form">
                            <div>
                                <input
                                    type="date"
                                    id="date"
                                    placeholder="Select Date"
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                    />
                                <input
                                    type="time"
                                    min = "08:00"
                                    max = "18:00"
                                    step = "1800"
                                    value={time}
                                    onChange={(e) => setTime(e.target.value)}
                                    />
                            </div>
                            <button 
                                type="submit"> Confirm Updated Details
                            </button>
                        </form>
                        <button onClick={deleteAppointment}>Cancel Appointment</button>
                        <button onClick ={handleClick}>Go Back</button>
                    </div>
                )
            }
            { updateErrors ? updateErrors.map(e => <div key={e}>{e[1]}</div>) : null}
        </li>
        </div>
    )
}

export default AptCard