export default function educationalExperience() {
    return (
        <>
            <label for="schoolName">School Name: </label>
            <input type="text" id="schoolName" name="schoolName"></input>
            <br></br>
            <label for="major">Major: </label>
            <input type="text" id="major" name="major"></input>
            <br></br>
            <label for="startDate">Start Date: </label>
            <input type="date" id="startDate" name="startDate"></input>
            <br></br>
            <label for="endDate">End Date: </label>
            <input type="date" id="endDate" name="endDate"></input>
        </>
    )
}