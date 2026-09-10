import { useState } from "react";
import '../index.css'

function AddApplication(){
    const [company,setCompany] = useState("");
    const [position,setPosition] = useState("");
    const [appliedDate, setAppliedDate] = useState("");
    const [status, setStatus] = useState("Applied");
    const [jobLink, setJobLink] = useState("");
    const [notes, setNotes] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        const newApplication = {
            company,
            position,
            appliedDate,
            status,
            jobLink,
            notes,
        }
        console.log({newApplication});
    }

    return(
        <main>
            <h1>Add Job Application</h1>
            <form className="application-form" onSubmit={handleSubmit}>
                <div> 
                    <label htmlFor="company">Company Name</label>
                    <input 
                    id="company" 
                    type="text"
                    value={company}
                    onChange={(event) => setCompany(event.target.value)}
                    />
                </div> 
                <div> 
                    <label htmlFor="position">Position</label>
                    <input 
                    id="position" 
                    type="text"
                    value={position}
                    onChange={(event) => setPosition(event.target.value)}
                    />
                </div> 
                <div>
                    <label htmlFor="appliedDate">Applied Date</label>
                    <input
                    id="appliedDate"
                    type="date"
                    value={appliedDate}
                    onChange={(event) => setAppliedDate(event.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="status">Status</label>
                    <select
                     id="status"
                     value={status}
                     onChange={(event) => setStatus(event.target.value)}
                    >
                        <option value="Applied">Applied</option>
                        <option value="Interview">Interview</option>
                        <option value="Offer">Offer</option>
                        <option value="Rejected">Rejected</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="jobLink">Job Link</label>
                    <input
                    id="jobLink"
                    type="url"
                    value={jobLink}
                    onChange={(event) => setJobLink(event.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="notes">Notes</label>
                    <textarea
                    id="notes"
                    value={notes}
                    onChange={(event) => setNotes(event.target.value)}
                    />
                </div>
                <button type="submit">Add Application</button>            
            </form>
        </main>
    );

}
export default AddApplication;