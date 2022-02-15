import React, {useState} from "react";
import "./DocCard.css"

function DocCard({doctor, user}) {
 const [showForm, setShowForm] = useState(true)
 const [time, setTime] = useState("")
 const [date, setDate] = useState("")


    return (

        <div className = "card">
            <p><b><u>Name:</u></b>  {doctor.name}</p>
            <p>Field: {doctor.field}</p>
            <p>Address: {doctor.address}</p>
            <p>Phone Number: {doctor.number}</p>
            <p>Rating: {doctor.rating} / 5</p>
        </div>
    )
}

export default DocCard