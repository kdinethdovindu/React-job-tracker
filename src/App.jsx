import './App.css'
import AddApplication from './pages/AddApplication'
import Applications from './pages/Applications';
import Dashboard from './pages/Dashboard'
import Navbar from "./components/Navbar";
import { useEffect,useState } from 'react'
import { Routes, Route } from "react-router";

function App() {
  const [applications, setApplications] = useState(() => {
    const savedApplications =
      localStorage.getItem("applications");

    if (!savedApplications) {
      return [];
    }

    try {
      return JSON.parse(savedApplications);
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(
      "applications",
      JSON.stringify(applications)
    );
  }, [applications]);

  const addApplication = (newApplication) => {
    setApplications((currentApplications) => [
      ...currentApplications,
      newApplication,
    ]);
  };

  const deleteApplication = (id) => {
    setApplications((currentApplications) =>
      currentApplications.filter(
        (application) => application.id !== id
      )
    );
  };

  const updateApplicationStatus = (id,newStatus) => {
    setApplications((currentApplications) => 
      currentApplications.map((application)=>
        application.id === id
          ?{
            ...application,
            status : newStatus,
          }
          :application
      )
    );
  };

  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <Dashboard applications={applications} />
          }
        />

        <Route
          path="/applications"
          element={
            <Applications applications={applications} deleteApplication={deleteApplication} updateApplicationStatus={updateApplicationStatus} />
          }
        />

        <Route
          path="/add-application"
          element={
            <AddApplication
              addApplication={addApplication}
            />
          }
        />
      </Routes>
    </>
  )
}

export default App
