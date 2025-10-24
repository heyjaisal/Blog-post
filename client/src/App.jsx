
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./auth/Login";
import SignUp from "./auth/Signup"
import BlogCreate from "./Blog/Create";
import BlogList from "./Blog/Fetch";
import BlogDetail from "./Blog/Details";

export default function App() {
  return (
    <Router>
      <Routes>
         <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create" element={<BlogCreate />} />
        <Route path="/blogs" element={<BlogList />} />
        <Route path="/blogs/:id" element={<BlogDetail />} />

       
        <Route path="*" element={<Login />} />
      </Routes>
    </Router>
  );
}

