import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CreateForm from "./pages/CreateForm";
import ShowForm from "./pages/ShowForm";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import { useAuthContext } from "./context/AuthContext";
import { Toaster } from "react-hot-toast";
import UserResponse from "./pages/UserResponse";
import ShowResponse from "./pages/ShowResponse";
import ThankYou from "./pages/ThankYou";

function App() {
  const { authUser } = useAuthContext();
  return (
    <main className="bg-gray-300 min-h-screen">
      <Routes>
        <Route
          path="/"
          element={authUser ? <Home /> : <Navigate to={"/login"} />}
        />
        <Route
          path="/createForm"
          element={authUser ? <CreateForm /> : <Navigate to={"/login"} />}
        />
        <Route
          path="/showForm"
          element={authUser ? <ShowForm /> : <Navigate to={"/login"} />}
        />
        <Route
          path="/showResponse"
          element={authUser ? <ShowResponse /> : <Navigate to={"/login"} />}
        />
        <Route
          path="/signup"
          element={authUser ? <Navigate to={"/"} /> : <SignUp />}
        />
        <Route
          path="/login"
          element={authUser ? <Navigate to={"/"} /> : <Login />}
        />
        <Route
        path="/showform/:id"
        element={<UserResponse/>}
        />
        <Route
        path="/thankyou"
        element={<ThankYou/>}
        />
      </Routes>
      <Toaster />
    </main>
  );
}

export default App;

// Complete any OR all of the below tasks.  :

// Task 1 > Create a Login Authentication and Users CRUD  -  10 Points
// Task 2 > Create a Form Creation Application like Google Forms to make custom forms.  -  20 Points
// Task 3 > Create a Video Application like Youtube livechat, which will play a video and get the timestamp of the video, based on the timestamp it will show comments.  -  30 Points

// Selection will be on the basis of total points earned and the quality of your submission.

// You can send google drive link of the screen recorded video of your assignment/working webapp (not the code) in the Internshala chat.
// Please rename the video with your fullname before sending.

// Thanks,
// Team ResoluteAI Software
// Submission deadline: 29 March, 2024
