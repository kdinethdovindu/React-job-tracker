
import ApplicationCard from "../components/ApplicationCard";

function Applications({ applications }) {
  return (
    <main>
      <h1>Applications</h1>

      {applications.length === 0 ? (
        <p>No applications added yet.</p>
      ) : (
        <div className="applications-list">
          {applications.map((application) => (
            <ApplicationCard
              key={application.id}
              application={application}
            />
          ))}
        </div>
      )}
    </main>
  );
}

export default Applications;