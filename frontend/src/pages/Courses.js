import { useEffect, useState } from "react";

function Courses() {
  const [courses, setCourses] = useState([]);
  const [myCourses, setMyCourses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");

      // كل الكورسات
      const res1 = await fetch("http://localhost:5000/courses");
      const data1 = await res1.json();
      setCourses(data1);

      // الكورسات اللي انا فيها
      const res2 = await fetch("http://localhost:5000/enroll/my", {
        headers: {
          Authorization: token
        }
      });
      const data2 = await res2.json();

      // خد بس IDs
      const ids = data2.map((c) => c._id);
      setMyCourses(ids);
    };

    fetchData();
  }, []);

  const enrollCourse = async (courseId) => {
    const token = localStorage.getItem("token");

    const res = await fetch("http://localhost:5000/enroll", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token
      },
      body: JSON.stringify({ courseId })
    });

    const data = await res.json();
    alert(data.message || "Enrolled successfully");

    // update UI
    setMyCourses([...myCourses, courseId]);
  };

  return (
    <div>
      <h2>Courses</h2>

      {courses.map((course) => {
        const isEnrolled = myCourses.includes(course._id);

        return (
          <div key={course._id}>
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <p>${course.price}</p>

            <button
              onClick={() => enrollCourse(course._id)}
              disabled={isEnrolled}
            >
              {isEnrolled ? "Enrolled ✅" : "Enroll"}
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Courses;