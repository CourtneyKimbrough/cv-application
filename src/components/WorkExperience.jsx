export default function educationalExperience() {
    return (
        <>
            <label for="companyName">Company Name: </label>
            <input type="text" id="companyName" name="companyName"></input>
            <br></br>
            <label for="position">Position: </label>
            <input type="text" id="position" name="position"></input>
            <br></br>
            <label for="responsibilities">Responsibilities: </label>
            <input type="text" id="responsibilities" name="responsibilities"></input>
            <br></br>
            <label for="startDate">Start Date: </label>
            <input type="date" id="startDate" name="startDate"></input>
            <br></br>
            <label for="endDate">End Date: </label>
            <input type="date" id="endDate" name="endDate"></input>
        </>
    )
}