import React from "react";
import "./Filter.css"

function Filter({docField, handleField}) {
     const fields = ["Allergy and Immunology", "Anesthesiology", "Dermatology", "Diagnostic Radiology", "Emergency Medicine", "Family Medicine", "Internal Medicine", "Medical Genetics", "Neurology", "Nuclear Medicine", "Obstetrics and Gynecology","Ophthalmology","Pathology","Pediatrics","Physical Medicine and Rehabilitation","Preventive Medicine","Psychiatry","Radiation Oncology","Surgery","Urology"]

    return(
        <div className = "filter">
          <select 
          name="filter" 
          value={docField}
          onChange={(e) => handleField(e.target.value)}
          >
            <option value="All">Filter By Field</option>
            {fields.map((field) => (
                <option value= {field}>{field}</option>
            ))}
          </select>
        </div>
        )

}



export default Filter