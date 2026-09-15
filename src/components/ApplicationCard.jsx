import { Link } from "react-router";
import useApplications from "../hooks/useApplications";

function ApplicationCard({ application }) {
  const {
    deleteApplication,
    updateApplicationStatus,
  } = useApplications();

  const handleDelete = () => {
    const shouldDelete = window.confirm(
      `Delete the application for ${application.company}?`
    );

    if (shouldDelete) {
      deleteApplication(application.id);
    }
  };

  const formattedDate = application.appliedDate
    ? new Date(
        `${application.appliedDate}T00:00:00`
      ).toLocaleDateString()
    : "Not provided";

  return (
    <div className="application-card">
      <div>
        <h3>{application.company}</h3>
        <p className="position-text">
          {application.position}
        </p>
      </div>

      <div className="status-row">
        <label
          htmlFor={`status-${application.id}`}
        >
          Status
        </label>

        <select
          id={`status-${application.id}`}
          value={application.status}
          onChange={(event) =>
            updateApplicationStatus(
              application.id,
              event.target.value
            )
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

      <p>
        <strong>Applied Date:</strong>{" "}
        {formattedDate}
      </p>

      {application.jobLink && (
        <p>
          <a
            href={application.jobLink}
            target="_blank"
            rel="noreferrer"
          >
            View Job Posting
          </a>
        </p>
      )}

      {application.notes && (
        <div>
          <strong>Notes:</strong>

          <p className="application-notes">
            {application.notes}
          </p>
        </div>
      )}

      <div className="card-actions">
        <Link
          className="button-link"
          to={`/applications/${application.id}/edit`}
        >
          Edit
        </Link>

        <button
          className="delete-button"
          type="button"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default ApplicationCard;