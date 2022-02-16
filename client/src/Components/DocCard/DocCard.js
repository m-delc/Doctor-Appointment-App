import React, {useState} from "react";
import "./DocCard.css"

function DocCard({doctor, user, appointments, setAppointments}) {
 const [showForm, setShowForm] = useState(true)
 const [time, setTime] = useState("")
 const [date, setDate] = useState("")
 const [postErrors, setPostErrors] =useState([])

 function handleClick() {
    setShowForm(!showForm)
 }

 function makeAppointment(e) {
     e.preventDefault()
     const doc = doctor.id
     const appointment = {
         time: time,
         date: date,
         doctor_id: doc
     }
     fetch('/appointments', {
        method:'POST',
        headers:{'Content-Type': 'application/json'},
        body:JSON.stringify(appointment)
    })
    .then(res => {
        if(res.ok) {
            res.json()
            .then((appointment) => {
                console.log(appointment)
                console.log(appointments)
                setAppointments([appointment, ...appointments])
            })
        } else {
            res.json()
            .then(json => setPostErrors(Object.entries(json.errors))
            )}
    })
 }


    return (
        <div className="apt-div">
        <li className = "card">
            <p><b><u>Name:</u></b>  {doctor.name}</p>
            <p><b><u>Field:</u></b>  {doctor.field}</p>
            <p><b><u>Address:</u></b>  {doctor.address}</p>
            <p><b><u>Phone Number:</u></b> {doctor.number}</p>
            <p><b><u>Rating:</u></b> {doctor.rating} / 5</p>

            {
                showForm ? (
                    <div className = "button">
                    <button onClick ={handleClick}>Make An Appointment</button>
                    </div>
                ) : (
                    <div>
                        <form onSubmit = {makeAppointment} className = "apt-form">
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
                        type="submit"> Confirm
                    </button>

                        </form>

                        <button onClick ={handleClick}>Go Back</button>

                    </div>
                )
            }
            { postErrors ? postErrors.map(e => <div key={e}>{e[1]}</div>) : null}
        </li>
    </div>
    )
}

export default DocCard