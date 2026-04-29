import MyCourses from "./pages/MyCourses";
import Courses from "./pages/Courses";
import Login from "./pages/Login";


function App() {
  return (
    <div>
      <Login />
      <hr />
      <Courses />
      <hr />
      <MyCourses />
    </div>
  );
}

export default App;