
import ApplicationCard from "../components/ApplicationCard";
import { useState } from "react";

function Applications({ applications }) {
  const [searchTerm,setSearchTerm] = useState("");
  const [statusFilter,setStatusFilter] = useState("All");
  const [sortOption, setSortOption] = useState("newest");
  const filteredApplication = applications.filter(
    (application) => {
      const search = searchTerm.toLowerCase();
      const matchsSearch = 
            application.company.toLowerCase().includes(search) ||
            application.position.toLowerCase().includes(search);
      
      const matchsStatus =
           statusFilter === "All"||
           application.status === statusFilter;

      return matchsSearch && matchsStatus;
             

    }
  );

  const sortedApplications = [...filteredApplication].sort(
    (a, b) => {
      if (sortOption === "newest") {
        return new Date(b.appliedDate) - new Date(a.appliedDate);
      }

      if (sortOption === "oldest") {
        return new Date(a.appliedDate) - new Date(b.appliedDate);
      }

      if (sortOption === "company") {
        return a.company.localeCompare(b.company);
      }

      return 0;
    }
  );


  return (
    <main>
      <h1>Applications</h1>

      <div className="application-controls"> 
        <input
          type="text"
          placeholder="Search by company or position"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
      

        <select
          value={statusFilter}
          onChange={(event) => setStatusFilter(event.target.value)}
        >
          <option value="All">All</option>
          <option value="Applied">Applied</option>
          <option value="Interview">Interview</option>
          <option value="Offer">Offer</option>
          <option value="Rejected">Rejected</option>

        </select>

        <select
          value={sortOption}
          onChange={(event) => setSortOption(event.target.value)}
        >
          <option value="newest">Newest First</option>
          <option value="oldest">Oldest First</option>
          <option value="company">Company A-Z</option>
        </select>
      </div>
      
      {sortedApplications.length === 0 ? (
        <p>No applications added yet.</p>
      ) : (
        <div className="applications-list">
          {sortedApplications.map((application) => (
            <ApplicationCard
              key={application.id}
              application={application}
            />
          ))}
        </div>
      )}
    </main>
  );
}

export default Applications;