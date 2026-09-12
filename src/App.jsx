import './App.css'
import AddApplication from './pages/AddApplication'
import Applications from './pages/Applications';
import Dashboard from './pages/Dashboard'
import Navbar from "./components/Navbar";
import { useState } from 'react'
import { Routes, Route } from "react-router";

function App() {
  const [applications,setApplication] = useState([]);

  const addApplication = (newApplication) => {
    setApplication((currentApplications) => [
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
