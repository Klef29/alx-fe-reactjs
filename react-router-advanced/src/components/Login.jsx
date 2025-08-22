
import { useNavigate } from "react-router-dom"
import { login } from "../services/fakeAuth"

export default function Login() {
  const navigate = useNavigate()

  const handleLogin = () => {
    login()
    navigate("/profile/details")
  }

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Login Page</h1>
      <button
        onClick={handleLogin}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
      >
        Log In
      </button>
    </div>
  )
}
