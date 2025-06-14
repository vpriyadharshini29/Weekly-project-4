import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import jobsData from "./Data/jobs"; // import real-looking job data
import "./JobPortal.css";

export default function JobList() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    // Simulate fetching realistic jobs
    setTimeout(() => {
      setJobs(jobsData);
    }, 300); // mimic network delay
  }, []);

  return (
    <div className="section">
      <h3>Available Jobs</h3>
      {jobs.map(job => (
        <div key={job.id} className="job-card">
          <h4>{job.title}</h4>
          <p>{job.company} – {job.location}</p>
          <p>{job.description.slice(0, 80)}...</p>
          <Link to={`/jobs/${job.id}`} className="view-link">View Details</Link>
        </div>
      ))}
    </div>
  );
}
