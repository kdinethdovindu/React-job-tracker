import { useState } from "react"
import { useNavigate,useParams } from "react-router"

function EditApplication({applications,updateApplication}) {
    const {id} = useParams();
    const application = applications.find(
        (application) => application.id === Number(id)
    );

    if (!application) {
        return (
        <main>
            <h1>Application Not Found</h1>
        </main>
        );
    }

    const [company, setCompany] = useState(
        application.company
    );

    const [position, setPosition] = useState(
        application.position
    );

    const [appliedDate, setAppliedDate] = useState(
        application.appliedDate
    );

    const [status, setStatus] = useState(
        application.status
    );

    const [jobLink, setJobLink] = useState(
        application.jobLink
    );

    const [notes, setNotes] = useState(
        application.notes
    );

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const updatedApplication = {
            ...application,
            company,
            position,
            appliedDate,
            status,
            jobLink,
            notes,
        };
     updateApplication(updatedApplication);
     navigate("/applications");
    };

    return (
    <main>
        <h1>Edit Application</h1>

        <form
        className="application-form"
        onSubmit={handleSubmit}
        >
            <div>
                <label htmlFor="company">
                Company Name
                </label>

                <input
                id="company"
                type="text"
                value={company}
                onChange={(event) =>
                    setCompany(event.target.value)
                }
                />
            </div>

            <div>
                <label htmlFor="position">
                Position
                </label>

                <input
                id="position"
                type="text"
                value={position}
                onChange={(event) =>
                    setPosition(event.target.value)
                }
                />
            </div>

            <div>
                <label htmlFor="appliedDate">
                Applied Date
                </label>

                <input
                id="appliedDate"
                type="date"
                value={appliedDate}
                onChange={(event) =>
                    setAppliedDate(event.target.value)
                }
                />
            </div>

            <div>
                <label htmlFor="status">
                Status
                </label>

                <select
                id="status"
                value={status}
                onChange={(event) =>
                    setStatus(event.target.value)
                }
                >
                <option value="Applied">
                    Applied
                </option>

                <option value="Interview">
                    Interview
                </option>

                <option value="Offer">
                    Offer
                </option>

                <option value="Rejected">
                    Rejected
                </option>
                </select>
            </div>

            <div>
                <label htmlFor="jobLink">
                Job Link
                </label>

                <input
                id="jobLink"
                type="url"
                value={jobLink}
                onChange={(event) =>
                    setJobLink(event.target.value)
                }
                />
            </div>

            <div>
                <label htmlFor="notes">
                Notes
                </label>

                <textarea
                id="notes"
                value={notes}
                onChange={(event) =>
                    setNotes(event.target.value)
                }
                />
            </div>

            <button type="submit">
                Save Changes
            </button>
            <button
                type="button"
                onClick={() =>
                    navigate("/applications")
                }
                >
                Cancel
            </button>
        </form>
    </main>
    );
}

export default EditApplication
