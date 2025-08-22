
import { Routes, Route, Link } from "react-router-dom"
import ProfileDetails from "./ProfileDetails"
import ProfileSettings from "./ProfileSettings"

export default function Profile() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Profile Page</h1>
      <nav className="space-x-4">
        <Link to="details">Details</Link>
        <Link to="settings">Settings</Link>
      </nav>

      {/* Nested Routes defined here */}
      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>
    </div>
  )
}
