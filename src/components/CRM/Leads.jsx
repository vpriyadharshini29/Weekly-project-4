import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import LeadPreviewPortal from "./LeadPreviewPortal";

export default function Leads() {
  const [leads, setLeads] = useState([]);
  const [selectedLead, setSelectedLead] = useState(null);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users") // simulate leads
      .then(res => setLeads(res.data));
  }, []);

  return (
    <div className="section">
      <h3>Leads</h3>
      <ul>
        {leads.map(lead => (
          <li key={lead.id}>
            {lead.name}
            <Link to={`/crm/leads/${lead.id}/edit`} className="edit-btn">Edit</Link>
            <button onClick={() => setSelectedLead(lead)}>Quick View</button>
          </li>
        ))}
      </ul>
      {selectedLead && (
        <LeadPreviewPortal lead={selectedLead} onClose={() => setSelectedLead(null)} />
      )}
    </div>
  );
}
