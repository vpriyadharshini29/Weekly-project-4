// CourseDetail.jsx
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function CourseDetail() {
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    // Replace with your actual API
    axios.get(`https://fakestoreapi.com/products/${courseId}`)
      .then(res => setCourse(res.data));
  }, [courseId]);

  if (!course) return <p>Loading course details...</p>;

  return (
    <div className="course-detail">
      <h2>{course.title}</h2>
      <p>{course.description || "No description available."}</p>
      <button>Start Lesson</button>
    </div>
  );
}
