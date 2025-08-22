
import { Outlet, Link } from "react-router-dom"

export default function Profile() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Profile Page</h1>
      <nav className="space-x-4">
        <Link to="details">Details</Link>
        <Link to="settings">Settings</Link>
      </nav>
      {/* Nested routes render here */}
      <Outlet />
    </div>
  )
}
