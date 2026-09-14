import {
  Routes,
  Route,
} from "react-router";

import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Applications from "./pages/Applications";
import AddApplication from "./pages/AddApplication";
import EditApplication from "./pages/EditApplication";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={<Dashboard />}
        />

        <Route
          path="/applications"
          element={<Applications />}
        />

        <Route
          path="/add-application"
          element={<AddApplication />}
        />

        <Route
          path="/applications/:id/edit"
          element={<EditApplication />}
        />
      </Routes>
    </>
  );
}

export default App;