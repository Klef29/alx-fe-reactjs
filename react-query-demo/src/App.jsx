import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import PostsComponent from './components/PostsComponent.jsx'

// Create a QueryClient instance (manages caching)
const queryClient = new QueryClient()

function App() {
  return (
    // Wrap your app with QueryClientProvide
    <QueryClientProvider client={queryClient}>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">React Query Demo</h1>
        <PostsComponent />
      </div>
    </QueryClientProvider>
  )
}

export default App
