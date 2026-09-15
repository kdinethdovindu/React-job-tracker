import '../App.css'
import DashboardCard from '../components/DashboardCard'
import useApplications from '../hooks/useApplications';

function Dashboard() {
  const { applications } =useApplications();
  const totalApplication = applications.length;
  const appliedCount = applications.filter(
    (application) => application.status === "Applied"
  ).length;
  const interviewCount = applications.filter(
    (application) => application.status === "Interview"
  ).length;
  const offerCount = applications.filter(
    (application) => application.status === "Offer"
  ).length;
  const rejectedCount = applications.filter(
  (application) => application.status === "Rejected"
).length;
  

  return (
    <main>
      <h1>Job Application Dashboard</h1>

      <div className='dashboard-grid'>
        <DashboardCard title="Total Applications" value={totalApplication} />
        <DashboardCard title="Applied" value={appliedCount} />
        <DashboardCard title="Interview" value={interviewCount} />
        <DashboardCard title="Offers" value={offerCount} />
        <DashboardCard title="Rejected" value={rejectedCount} />

      </div>
    </main>
  )
}

export default Dashboard;