import { Routes, Route, NavLink, Outlet } from "react-router-dom";
import Leads from "./Leads";
import Deals from "./Deals";
import Contacts from "./Contacts";
import Settings from "./Settings";
import LeadEdit from "./LeadEdit";
import withPermissions from "../../hoc/withPermissions";
import "./CRM.css";
import CRMLogin from "./CRMLogin";

const ProtectedLeadEdit = withPermissions(LeadEdit, "canEditLead");

export default function CRMApp() {
  return (
    <div className="crm-container">
      <h2>CRM System</h2>

      <nav className="crm-nav">
        <NavLink to="leads">Leads</NavLink>
        <NavLink to="deals">Deals</NavLink>
        <NavLink to="contacts">Contacts</NavLink>
        <NavLink to="settings">Settings</NavLink>
      </nav>

      <Routes>
        {/* Routes relative to /crm */}
        <Route path="leads" element={<Leads />} />
        <Route path="leads/:id/edit" element={<ProtectedLeadEdit />} />
        <Route path="deals" element={<Deals />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="settings" element={<Settings />} />
      </Routes>

      {/* <CRMLogin /> */}
    </div>
  );
}
