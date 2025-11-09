import { useState } from 'react'

export default function workExperience({ edit }) {
    
        const [formData, setFormData] = useState({
            companyName: '',
            position: '',
            responsibilities: '',
            startDate: '',
            endDate: ''
        })
        function handleChange(e) {
            setFormData({
                ...formData,
                [e.target.name]: e.target.value
            })
        }
    return (
        <>
            <label htmlFor="companyName">Company Name: </label>
            {edit ? (<input type="text" name="companyName" className="drop-shadow-md border-2 border-grey" id="companyName" value={formData.companyName} onChange={handleChange}></input>) : (<span>{formData.companyName}</span>)}
            <br></br>
            <label htmlFor="position">Position: </label>
            {edit ? (<input type="text" name="position" id="position" className="drop-shadow-md border-2 border-grey" value={formData.position} onChange={handleChange}></input>) : (<span>{formData.position}</span>)}
            <br></br>
            <label htmlFor="responsibilities">Responsibilities: </label>
            {edit ? (<input type="text" name="responsibilities" className="drop-shadow-md border-2 border-grey" id="responsibilities" value={formData.responsibilities} onChange={handleChange}></input>) : (<span>{formData.responsibilities}</span>)}
            <br></br>
            <br></br>
            <label htmlFor="startDate">Start Date: </label>
            {edit ? (<input type="date" name="startDate" id="startDate" className="drop-shadow-md border-2 border-grey" value={formData.startDate} onChange={handleChange}></input>) : (<span>{formData.startDate}</span>)}
            <br></br>
            <label htmlFor="endDate">End Date: </label>
            {edit ? (<input type="date" name="endDate" id="endDate" className="drop-shadow-md border-2 border-grey" value={formData.endDate} onChange={handleChange}></input>) : (<span>{formData.endDate}</span>)}
        </>
    )
}