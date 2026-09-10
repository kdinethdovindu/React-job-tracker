import './App.css'
import AddApplication from './pages/AddApplication'
import Applications from './pages/Applications';
import Dashboard from './pages/Dashboard'
import { useState } from 'react'


function App() {
  const [applications,setApplication] = useState([]);

  const addApplication = (newApplication) => {
    setApplication((currentApplications) => [
      ...currentApplications,
      newApplication,
    ]);
  };

  return (
    <div>
      <header>
        <h2>Career Track</h2>
      </header>
      
      <Dashboard/>
      <AddApplication addApplication={addApplication}/>
      <Applications applications={applications}/>
    </div>
  )
}

export default App
