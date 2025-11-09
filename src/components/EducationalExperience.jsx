import { useState } from 'react'

export default function educationalExperience({edit}) {

    const [formData, setFormData] = useState({
        schoolName: '',
        major: '',
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
            <label htmlFor="schoolName">School Name: </label>
            { edit ? (<input type="text" name= "schoolName" className="drop-shadow-md border-2 border-grey" id="schoolName" value={ formData.schoolName} onChange={handleChange}></input>) : (<span>{formData.schoolName}</span>)}
            <br></br>
            <label htmlFor="major">Major: </label>
            { edit ? (<input type="text" name= "major" id="major" className="drop-shadow-md border-2 border-grey" value={ formData.major} onChange={handleChange}></input>) : (<span>{formData.major}</span>)}
            <br></br>
            <br></br>
            <label htmlFor="startDate">Start Date: </label>
            { edit ? (<input type="date" name= "startDate" className="drop-shadow-md border-2 border-grey" id="startDate" value={ formData.startDate} onChange={handleChange}></input>) : (<span>{formData.startDate}</span>)}
            <br></br>
            <label htmlhtmlFor="endDate">End Date: </label>
            { edit ? (<input type="date" name= "endDate" className="drop-shadow-md border-2 border-grey" id="endDate" value={ formData.endDate} onChange={handleChange}></input>) : (<span>{formData.endDate}</span>)}
        </>
    )
}