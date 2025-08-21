import { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setUsers([]);

    try {
      const results = await fetchUserData(username, location, minRepos);
      setUsers(results);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded shadow">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={username}
          placeholder="GitHub username"
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          value={location}
          placeholder="Location (e.g., Ghana)"
          onChange={(e) => setLocation(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          value={minRepos}
          placeholder="Minimum public repositories"
          onChange={(e) => setMinRepos(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      {loading && <p className="mt-4 text-gray-600">Loading...</p>}
      {error && <p className="mt-4 text-red-600">Looks like we can't find the user</p>}

      <div className="mt-6 space-y-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {users.map((user) => (
          <div key={user.id} className="p-4 border rounded shadow">
            <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full" />
            <h2 className="text-xl font-bold">{user.login}</h2>
            <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
              View Profile
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
