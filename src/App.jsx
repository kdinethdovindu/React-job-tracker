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
            <Applications applications={applications} />
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
