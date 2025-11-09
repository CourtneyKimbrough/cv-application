import EducationalExperience from './EducationalExperience'
import WorkExperience from './WorkExperience'

export default function CVform() {
    return (
        <form>
            <h2>General Information</h2>
            <label for="firstName">First Name: </label>
            <input type="text" id="firstName" name="firstName"></input>
            <br></br>
            <label for="lastName">Last Name: </label>
            <input type="text" id="lastName" name="lastName"></input>
            <br></br>
            <label for="email">Email: </label>
            <input type="email" id="email" name="email"></input>
            <br></br>
            <label for="phone">Phone Number: </label>
            <input type="phone" id="phone" name="phone"></input>
            <h2>Educational Experience</h2>
            <EducationalExperience></EducationalExperience>
            <h2>Work Experience</h2>
            <WorkExperience></WorkExperience>
        </form>
    )
}

