
import { Navigate } from "react-router-dom"
import { checkAuth } from "../services/fakeAuth"

export default function ProtectedRoute({ children }) {
  if (!checkAuth()) {
    return <Navigate to="/login" replace />
  }
  return children
}
