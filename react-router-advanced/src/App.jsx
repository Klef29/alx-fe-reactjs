
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Home from "./components/Home"
import BlogPost from "./components/BlogPost"
import Profile from "./components/Profile"
import ProfileDetails from "./components/ProfileDetails"
import ProfileSettings from "./components/ProfileSettings"
import Login from "./components/Login"
import ProtectedRoute from "./components/ProtectedRoute"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Dynamic Route */}
        <Route path="/post/:id" element={<BlogPost />} />

        {/* Protected Route with Nested Routes */}
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        >
          <Route path="details" element={<ProfileDetails />} />
          <Route path="settings" element={<ProfileSettings />} />
        </Route>

        {/* Login Page */}
        <Route path="/login" element={<Login />} />

        {/* Catch-all redirect */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  )
}

export default App
