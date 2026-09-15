import { useState } from "react";

const emptyApplication = {
  company: "",
  position: "",
  appliedDate: "",
  status: "Applied",
  jobLink: "",
  notes: "",
};

function ApplicationForm({
  initialData = emptyApplication,
  onSubmit,
  submitLabel,
}) {
  const [errors,setErrors] = useState({});
  const [company, setCompany] = useState(
    initialData.company
  );

  const [position, setPosition] = useState(
    initialData.position
  );

  const [appliedDate, setAppliedDate] = useState(
    initialData.appliedDate
  );

  const [status, setStatus] = useState(
    initialData.status
  );

  const [jobLink, setJobLink] = useState(
    initialData.jobLink
  );

  const [notes, setNotes] = useState(
    initialData.notes
  );
  const validateForm =() => {
    const newErrors = {};
    if(!company.trim()){
      newErrors.company = "Company name is required";
    }
    if (!position.trim()) {
      newErrors.position = "Position is required.";
    }

    if (!appliedDate) {
      newErrors.appliedDate = "Applied date is required.";
    }

    if (jobLink.trim()) {
      try {
        new URL(jobLink);
      } catch {
        newErrors.jobLink =
          "Enter a valid URL.";
      }
    }

    return newErrors;
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length >0){
      setErrors(validationErrors);
      return;
    }

    setErrors({});

    const formData = {
      company: company.trim(),
      position: position.trim(),
      appliedDate,
      status,
      jobLink: jobLink.trim(),
      notes: notes.trim(),
    };

    onSubmit(formData);
  };

  return (
    <form
      className="application-form"
      onSubmit={handleSubmit}
    >
      <div>
        <label htmlFor="company">
          Company Name
        </label>

        <input
          id="company"
          type="text"
          value={company}
          onChange={(event) =>
            setCompany(event.target.value)
          }
        />
      </div>

      <div>
        <label htmlFor="position">
          Position
        </label>

        <input
          id="position"
          type="text"
          value={position}
          onChange={(event) =>
            setPosition(event.target.value)
          }
        />
      </div>

      <div>
        <label htmlFor="appliedDate">
          Applied Date
        </label>

        <input
          id="appliedDate"
          type="date"
          value={appliedDate}
          onChange={(event) =>
            setAppliedDate(event.target.value)
          }
        />
      </div>

      <div>
        <label htmlFor="status">
          Status
        </label>

        <select
          id="status"
          value={status}
          onChange={(event) =>
            setStatus(event.target.value)
          }
        >
          <option value="Applied">
            Applied
          </option>
          <option value="Interview">
            Interview
          </option>
          <option value="Offer">
            Offer
          </option>
          <option value="Rejected">
            Rejected
          </option>
        </select>
      </div>

      <div>
        <label htmlFor="jobLink">
          Job Link
        </label>

        <input
          id="jobLink"
          type="url"
          value={jobLink}
          onChange={(event) =>
            setJobLink(event.target.value)
          }
        />
      </div>

      <div>
        <label htmlFor="notes">
          Notes
        </label>

        <textarea
          id="notes"
          value={notes}
          onChange={(event) =>
            setNotes(event.target.value)
          }
        />
      </div>

      <button type="submit">
        {submitLabel}
      </button>
    </form>
  );
}

export default ApplicationForm;