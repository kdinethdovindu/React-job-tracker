function ApplicationCard({application ,deleteApplication, updateApplicationStatus}){
  const handleDelete = () => {
    const shouldDelete = window.confirm(
      `Delete the application for ${application.company}?`
    );

    if (shouldDelete) {
      deleteApplication(application.id);
    }
  };
return (
    <div className="application-card">
      <h3>{application.company}</h3>

      <p>{application.position}</p>

      <label htmlFor={`status-${application.id}`}>
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
        <option value="Applied">Applied</option>
        <option value="Interview">Interview</option>
        <option value="Offer">Offer</option>
        <option value="Rejected">Rejected</option>
      </select>

      <p>
        <strong>Applied Date:</strong> {application.appliedDate}
      </p>

      {application.jobLink && (
        <p>
          <a
            href={application.jobLink}
            target="_blank"
            rel="noreferrer"
          >
            View Job
          </a>
        </p>
      )}

      {application.notes && (
        <p>
          <strong>Notes:</strong> {application.notes}
        </p>
      )}
      <button
        onClick={handleDelete}
      >
        Delete
      </button>
    </div>
  );


}
export default ApplicationCard;