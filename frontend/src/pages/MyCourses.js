import { useEffect, useState } from "react";

function MyCourses() {
  const [courses, setCourses] = useState(null);

  useEffect(() => {
    const fetchMyCourses = async () => {
      const token = localStorage.getItem("token");

      const res = await fetch("http://localhost:5000/enroll/my", {
        headers: {
          Authorization: token
        }
      });

      const data = await res.json();
      setCourses(data);
    };

    fetchMyCourses();
  }, []);

  if (!courses) return <p>Loading...</p>;

  if (courses.length === 0) return <p>No enrolled courses</p>;

  return (
    <div>
      <h2>My Courses</h2>

      {courses.map((course) => (
        <div key={course._id}>
          <h3>{course.title}</h3>
          <p>{course.description}</p>
          <p>${course.price}</p>
        </div>
      ))}
    </div>
  );
}

export default MyCourses;