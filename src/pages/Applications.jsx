import { useState } from "react";
import { Link } from "react-router";

import ApplicationCard from "../components/ApplicationCard";
import useApplications from "../hooks/useApplications";

function Applications() {
  const { applications } =
    useApplications();

  const [searchTerm, setSearchTerm] =
    useState("");

  const [statusFilter, setStatusFilter] =
    useState("All");

  const [sortOption, setSortOption] =
    useState("newest");

  const filteredApplications =
    applications.filter((application) => {
      const search =
        searchTerm.toLowerCase();

      const matchesSearch =
        application.company
          .toLowerCase()
          .includes(search) ||
        application.position
          .toLowerCase()
          .includes(search);

      const matchesStatus =
        statusFilter === "All" ||
        application.status === statusFilter;

      return (
        matchesSearch && matchesStatus
      );
    });

  const sortedApplications = [
    ...filteredApplications,
  ].sort((a, b) => {
    if (sortOption === "newest") {
      return (
        new Date(b.appliedDate) -
        new Date(a.appliedDate)
      );
    }

    if (sortOption === "oldest") {
      return (
        new Date(a.appliedDate) -
        new Date(b.appliedDate)
      );
    }

    if (sortOption === "company") {
      return a.company.localeCompare(
        b.company
      );
    }

    return 0;
  });

  const resetFilters = () => {
    setSearchTerm("");
    setStatusFilter("All");
    setSortOption("newest");
  };

  return (
    <main>
      <div className="page-header">
        <div>
          <h1>Applications</h1>

          <p>
            Track and manage your job
            applications.
          </p>
        </div>

        <Link
          className="button-link"
          to="/add-application"
        >
          Add Application
        </Link>
      </div>

      {applications.length > 0 && (
        <>
          <div className="application-controls">
            <input
              type="text"
              placeholder="Search by company or position"
              value={searchTerm}
              onChange={(event) =>
                setSearchTerm(
                  event.target.value
                )
              }
              aria-label="Search applications"
            />

            <select
              value={statusFilter}
              onChange={(event) =>
                setStatusFilter(
                  event.target.value
                )
              }
              aria-label="Filter by status"
            >
              <option value="All">
                All Statuses
              </option>

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

            <select
              value={sortOption}
              onChange={(event) =>
                setSortOption(
                  event.target.value
                )
              }
              aria-label="Sort applications"
            >
              <option value="newest">
                Newest First
              </option>

              <option value="oldest">
                Oldest First
              </option>

              <option value="company">
                Company A-Z
              </option>
            </select>

            <button
              type="button"
              onClick={resetFilters}
            >
              Reset Filters
            </button>
          </div>

          <p className="result-count">
            Showing{" "}
            {sortedApplications.length} of{" "}
            {applications.length} applications
          </p>
        </>
      )}

      {applications.length === 0 ? (
        <div className="empty-state">
          <h2>No applications yet</h2>

          <p>
            Add your first job application
            to start tracking your progress.
          </p>

          <Link
            className="button-link"
            to="/add-application"
          >
            Add Application
          </Link>
        </div>
      ) : sortedApplications.length ===
        0 ? (
        <div className="empty-state">
          <h2>
            No matching applications
          </h2>

          <p>
            Try changing your search term
            or status filter.
          </p>

          <button
            type="button"
            onClick={resetFilters}
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="applications-list">
          {sortedApplications.map(
            (application) => (
              <ApplicationCard
                key={application.id}
                application={application}
              />
            )
          )}
        </div>
      )}
    </main>
  );
}

export default Applications;