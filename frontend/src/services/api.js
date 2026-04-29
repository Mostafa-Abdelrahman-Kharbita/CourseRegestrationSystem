const BASE_URL = "http://localhost:5000";

// login
export const loginUser = async (data) => {
  const res = await fetch(`${BASE_URL}/users/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  return res.json();
};

// get courses
export const getCourses = async (token) => {
  const res = await fetch(`${BASE_URL}/courses`, {
    headers: {
      Authorization: token
    }
  });

  return res.json();
};

// enroll
export const enrollCourse = async (courseId, token) => {
  const res = await fetch(`${BASE_URL}/enroll`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: token
    },
    body: JSON.stringify({ courseId })
  });

  return res.json();
};