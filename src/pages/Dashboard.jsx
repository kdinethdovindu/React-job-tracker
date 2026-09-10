import '../App.css'
import DashboardCard from '../components/DashboardCard'

function Dashboard() {
  

  return (
    <main>
      <h1>Job Application Dashboard</h1>

      <div className='dashboard-grid'>
        <DashboardCard title="Total Applications" value={0} />
        <DashboardCard title="Applied" value={0} />
        <DashboardCard title="Interview" value={0} />
        <DashboardCard title="Offers" value={0} />
        <DashboardCard title="Rejected" value={0} />

      </div>
    </main>
  )
}

export default Dashboard;