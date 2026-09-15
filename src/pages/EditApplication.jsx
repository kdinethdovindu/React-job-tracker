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

  const { id } = useParams();

  const navigate = useNavigate();

  const application =
    applications.find(
      (application) =>
        application.id === Number(id)
    );

  if (!application) {
    return (
      <main className="not-found">
        <h1>
          Application Not Found
        </h1>

        <p>
          This application may have been
          deleted or does not exist.
        </p>

        <button
          type="button"
          onClick={() =>
            navigate("/applications")
          }
        >
          Back to Applications
        </button>
      </main>
    );
  }

  const handleEditApplication = (
    formData
  ) => {
    const updatedApplication = {
      ...application,
      ...formData,
    };

    updateApplication(
      updatedApplication
    );

    navigate("/applications");
  };

  return (
    <main>
      <h1>Edit Application</h1>

      <ApplicationForm
        initialData={application}
        onSubmit={
          handleEditApplication
        }
        submitLabel="Save Changes"
      />

      <button
        className="secondary-button"
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

export default EditApplication;