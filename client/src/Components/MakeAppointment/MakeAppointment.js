import React, {useState} from "react";
import './MakeAppointment.css'
import Filter from '../Filter/Filter'
import DocCard from '../DocCard/DocCard'

function MakeAppointment({user, doctors}) {
  
const [docField, setDocField] = useState("All")



function handleField(selectedField) {
    setDocField(selectedField)
}


const doctorList = doctors.filter((doctor) => {
  if( docField === "All") return true;
  return doctor.field === docField
})

console.log(doctorList)

return (
  <div className = "appt-cont">
    <h1>Make Appointment</h1>
    <h3>Please Select a Doctor and the Details of your Appointment</h3>
    <Filter docField = {docField} handleField = {handleField}/>

    <ul className="cards">
      {doctorList.map((doctor) => (
        <DocCard key={doctor.id} doctor = {doctor} user ={user} />
      ))}
    </ul>
  






  </div>


)








}

export default MakeAppointment;