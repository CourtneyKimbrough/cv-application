import EducationalExperience from './EducationalExperience'
import WorkExperience from './WorkExperience'
import { useState } from 'react'

export default function CVform() {
    const [edit, setEdit] = useState(1)
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: ''
    })

    function changeState(e) {
        e.preventDefault()
        edit ? (setEdit(0)) : (setEdit(1))
    }

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <form className="container mx-auto text-left border-2 border-black p-4">
            <h2 className="font-bold">General Information</h2>
            <label htmlFor="firstName">First Name: </label>
            {edit ? (<input type="text" name="firstName" id="firstName" className="drop-shadow-md border-2 border-grey" value={formData.firstName} onChange={handleChange}></input>) : <span>{formData.firstName}</span>}
            <br></br>
            <label htmlFor="lastName">Last Name: </label>
            {edit ? (<input type="text" name="lastName" id="lastName" className="drop-shadow-md border-2 border-grey" value={formData.lastName} onChange={handleChange}></input>) : <span>{formData.lastName}</span>}
            <br></br>
            <label htmlFor="email">Email: </label>
            {edit ? (<input type="email" name="email" className="drop-shadow-md border-2 border-grey" id="email" value={formData.email} onChange={handleChange}></input>) : <span>{formData.email}</span>}
            <br></br>
            <label htmlFor="phone">Phone Number: </label>
            {edit ? (<input type="phone" id="phone" name="phone" className="drop-shadow-md border-2 border-grey" value={formData.phone} onChange={handleChange}></input>) : <span>{formData.phone} </span>}
            <br></br>
            <br></br>
            <h2 className="font-bold">Educational Experience</h2>
            <EducationalExperience edit={edit}></EducationalExperience>
            <br></br>
            <br></br>
            <h2 className="font-bold">Work Experience</h2>
            <WorkExperience edit={edit} ></WorkExperience>
            <br></br>
            <br></br>
            <button onClick={changeState}>{edit ? 'Save' : 'Edit'}</button>
        </form>
    )
}

