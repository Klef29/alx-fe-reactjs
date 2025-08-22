
import { Link } from "react-router-dom"

export default function Home() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Home Page</h1>
      <p>Welcome! Try navigating:</p>
      <ul className="list-disc pl-6">
        <li><Link to="/post/1">Go to Blog Post 1</Link></li>
        <li><Link to="/profile/details">Go to Profile Details (Protected)</Link></li>
      </ul>
    </div>
  )
}
