import { Link } from "react-router";

import DashboardCard from "../components/DashboardCard";
import useApplications from "../hooks/useApplications";

function Dashboard() {
  const { applications } =
    useApplications();

  const totalApplications =
    applications.length;

  const appliedCount =
    applications.filter(
      (application) =>
        application.status === "Applied"
    ).length;

  const interviewCount =
    applications.filter(
      (application) =>
        application.status === "Interview"
    ).length;

  const offerCount =
    applications.filter(
      (application) =>
        application.status === "Offer"
    ).length;

  const rejectedCount =
    applications.filter(
      (application) =>
        application.status === "Rejected"
    ).length;

  return (
    <main>
      <div className="page-header">
        <div>
          <h1>
            Job Application Dashboard
          </h1>

          <p>
            Keep track of your internship
            and job applications.
          </p>
        </div>

        <Link
          className="button-link"
          to="/add-application"
        >
          Add Application
        </Link>
      </div>

      <div className="dashboard-grid">
        <DashboardCard
          title="Total Applications"
          value={totalApplications}
        />

        <DashboardCard
          title="Applied"
          value={appliedCount}
        />

        <DashboardCard
          title="Interview"
          value={interviewCount}
        />

        <DashboardCard
          title="Offers"
          value={offerCount}
        />

        <DashboardCard
          title="Rejected"
          value={rejectedCount}
        />
      </div>

      {applications.length === 0 && (
        <div className="empty-state">
          <h2>Start tracking your jobs</h2>

          <p>
            You haven't added any job
            applications yet.
          </p>

          <Link
            className="button-link"
            to="/add-application"
          >
            Add your first application
          </Link>
        </div>
      )}
    </main>
  );
}

export default Dashboard;