import './App.css'
import AddApplication from './pages/AddApplication'
import Applications from './pages/Applications';
import Dashboard from './pages/Dashboard'
import Navbar from "./components/Navbar";
import { useEffect,useReducer } from 'react'
import { Routes, Route } from "react-router";
import EditApplication from "./pages/EditApplication";
import applicationReducer from './reducers/applicationReducer';


function App() {
  const initializeApplications = () => {
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
  };

  const [applications, dispatch] = useReducer(
    applicationReducer,
    [],
    initializeApplications
  );

  useEffect(() => {
    localStorage.setItem(
      "applications",
      JSON.stringify(applications)
    );
  }, [applications]);

  const addApplication = (newApplication) => {
    dispatch({
      type: "ADD_APPLICATION",
      payload: newApplication,
    });
  };

  const deleteApplication = (id) => {
    dispatch({
      type: "DELETE_APPLICATION",
      payload: id,
    });
  };

  const updateApplicationStatus = (
    id,
    newStatus
  ) => {
    dispatch({
      type: "UPDATE_STATUS",
      payload: {
        id,
        status: newStatus,
      },
    });
  };

  const updateApplication = (
    updatedApplication
  ) => {
    dispatch({
      type: "UPDATE_APPLICATION",
      payload: updatedApplication,
    });
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

        <Route
          path="/applications/:id/edit"
          element={
            <EditApplication
              applications={applications}
              updateApplication={updateApplication}
            />
          }
        />
      </Routes>
    </>
  )
}

export default App
