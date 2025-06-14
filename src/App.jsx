import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

// Existing Apps
import BlogPlatform from "./components/BlogPlatform/BlogPlatform";
import ECommerceApp from "./components/ECommerce/EcommerceApp";
import CRMApp from "./components/CRM/CRMApp";
import Courses from "./components/LMS/Courses";
import CourseDetail from "./components/LMS/CourseDetail";
import Login from "./components/LMS/Login";
import withRole from "./hoc/withRole";

// ➕ Job Portal
import JobPortal from "./components/JobPortal/JobPortalApp";

export default function App() {
  return (
    <>
      <Router>
        <div className="main-nav">
          <h1>React Mega App</h1>
          <nav>
            <Link to="/blog">Blog</Link>
            <Link to="/ecommerce">E-Commerce</Link>
            <Link to="/courses">LMS</Link>
            <Link to="/crm">CRM</Link>
            <Link to="/jobs">Job Portal</Link>
          </nav>
        </div>

        <Routes>
          <Route path="/blog/*" element={<BlogPlatform />} />
          <Route path="/ecommerce/*" element={<ECommerceApp />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:courseId" element={withRole("student")(CourseDetail)} />
          <Route path="/login" element={<Login />} />
          <Route path="/crm/*" element={<CRMApp />} />

          {/* ✅ Job Portal */}
          <Route path="/jobs/*" element={<JobPortal />} />
        </Routes>
      </Router>

      {/* React Portal root for modals */}
      <div id="portal-root"></div>
    </>
  );
}
