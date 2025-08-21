import React from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

// Function to fetch posts from API
const fetchPosts = async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
  return response.data
}

const PostsComponent = () => {
  const {
    data: posts,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
    // Advanced React Query options:
    cacheTime: 1000 * 60 * 5,          // cache data for 5 minutes
    staleTime: 1000 * 30,              // data stays "fresh" for 30s before becoming stale
    refetchOnWindowFocus: false,       // don't auto-refetch when window gains focus
    keepPreviousData: true,            // keep old data visible while fetching new data
  })

  if (isLoading) return <p>Loading posts...</p>
  if (isError) return <p>Error: {error.message}</p>

  return (
    <div>
      <button
        onClick={() => refetch()}
        className="mb-4 px-4 py-2 bg-blue-600 text-white rounded"
      >
        Refetch Posts
      </button>

      <ul className="space-y-2">
        {posts.slice(0, 10).map((post) => (
          <li key={post.id} className="p-4 border rounded shadow">
            <h2 className="font-semibold">{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PostsComponent
