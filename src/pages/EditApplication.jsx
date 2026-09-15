import {
  useNavigate,
  useParams,
} from "react-router";

import ApplicationForm from "../components/ApplicationForm";
import useApplications from "../hooks/useApplications";


function EditApplication() {
    const {
        applications,
        updateApplication,
    } = useApplications();
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

    const navigate = useNavigate();
    const handleEditApplication = (formData) => {
        const updatedApplication = {
            ...application,
            ...formData,
        };
        updateApplication(updatedApplication);
        navigate("/applications");
    }

    return (
    <main>
        <ApplicationForm
            initialData={application}
            onSubmit={handleEditApplication}
            submitLabel="Save Changes"
        />

        <button
            type="button"
            onClick={() =>
            navigate("/applications")
            }
        >
            Cancel
        </button>
    </main>
    );
}

export default EditApplication
