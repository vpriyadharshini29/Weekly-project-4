import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./LMS.css";

export default function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // ✅ Replace API call with local course mock data
    setCourses([
      { id: "1", title: "React Basics", summary: "Learn fundamentals of React." },
      { id: "2", title: "Advanced React", summary: "Hooks, Context API, and more." },
      { id: "3", title: "React with TypeScript", summary: "Typed React development." }
    ]);
  }, []);

  return (
    <div className="courses">
      <h2>Available Courses</h2>
      <div className="course-grid">
        {courses.map((course) => (
          <div className="course-card" key={course.id}>
            <h3>{course.title}</h3>
            <p>{course.summary}</p>
            <Link to={`/courses/${course.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
