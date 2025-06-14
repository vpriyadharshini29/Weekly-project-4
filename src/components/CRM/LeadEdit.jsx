import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./CRM.css";

export default function LeadEdit() {
  const { id } = useParams();
  const [lead, setLead] = useState(null);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => setLead(res.data))
      .catch(err => console.error("Error fetching lead:", err));
  }, [id]);

  if (!lead) return <div className="section">Loading Lead...</div>;

  return (
    <div className="section">
      <h3>Edit Lead: {lead.name}</h3>
      <p><strong>Email:</strong> {lead.email}</p>
      <p><strong>Username:</strong> {lead.username}</p>
      <p><strong>Phone:</strong> {lead.phone}</p>
    </div>
  );
}
