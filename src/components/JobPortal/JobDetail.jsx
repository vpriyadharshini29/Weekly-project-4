import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import withAuth from "../../hoc/withAuth";
import ApplyModal from "./ApplyModal";
import jobs from "./Data/jobs"; // using local realistic data
import "./JobPortal.css";

function JobDetailComponent() {
  const { jobId } = useParams();
  const [job, setJob] = useState(null);
  const [showApply, setShowApply] = useState(false);

  useEffect(() => {
    const foundJob = jobs.find((j) => j.id === Number(jobId));
    if (foundJob) {
      setJob(foundJob);
    } else {
      console.error("Job not found");
    }
  }, [jobId]);

  if (!job) return <div className="section">Loading job details...</div>;

  return (
    <div className="section">
      <h2>{job.title}</h2>
      <p><strong>Company:</strong> {job.company}</p>
      <p><strong>Location:</strong> {job.location}</p>
      <p>{job.description}</p>

      <button className="apply-btn" onClick={() => setShowApply(true)}>
        Apply Now
      </button>

      {showApply && <ApplyModal onClose={() => setShowApply(false)} />}
    </div>
  );
}

export default withAuth(JobDetailComponent);
