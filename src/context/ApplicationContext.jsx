import {
  createContext,
  useEffect,
  useReducer,
} from "react";

import applicationReducer from "../reducers/applicationReducer";

export const ApplicationContext = createContext(null);

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

export function ApplicationProvider({ children }) {
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

  const updateApplication = (
    updatedApplication
  ) => {
    dispatch({
      type: "UPDATE_APPLICATION",
      payload: updatedApplication,
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

  return (
    <ApplicationContext.Provider
      value={{
        applications,
        addApplication,
        deleteApplication,
        updateApplication,
        updateApplicationStatus,
      }}
    >
      {children}
    </ApplicationContext.Provider>
  );
}