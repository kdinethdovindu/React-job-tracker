import { useContext } from "react";
import { useNavigate } from "react-router";

import ApplicationForm from "../components/ApplicationForm";
import { ApplicationContext } from "../context/ApplicationContext";

function AddApplication() {
  const { addApplication } =
    useContext(ApplicationContext);
    const navigate = useNavigate();

    const handleAddApplication = (formData) => {
        const newApplication = {
            id: Date.now(),
            ...formData,
        };

        addApplication(newApplication);
        navigate("/applications");
    }

    return(
        <main>
            <h1>Add Job Application</h1>
            <ApplicationForm
             onSubmit={handleAddApplication}
             submitLabel="Add Application"
            />
           
        </main>
    );

}
export default AddApplication;