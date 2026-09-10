function ApplicationCard({application}){
return (
    <div className="application-card">
      <h3>{application.company}</h3>

      <p>{application.position}</p>

      <p>
        <strong>Status:</strong> {application.status}
      </p>

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
    </div>
  );


}
export default ApplicationCard;