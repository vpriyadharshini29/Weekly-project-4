import { Routes, Route, Link } from "react-router-dom";
// import JobList from "./JobList";
// import JobDetail from "./JobDetail";
import "./JobPortal.css";
import JobList from "./JobList";
import JobDetail from "./JobDetail";

export default function JobPortal() {
  return (
    <div className="jobportal-container">
      <h2>Job Portal</h2>
      <nav className="jobportal-nav">
        <Link to="">Job Listings</Link>
      </nav>

      <Routes>
        <Route path="" element={<JobList />} />
        <Route path=":jobId" element={<JobDetail />} />
      </Routes>
    </div>
  );
}
