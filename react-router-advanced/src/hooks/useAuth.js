import { useState } from "react";

// Simple mock authentication hook
export const useAuth = () => {
  const [isAuthenticated] = useState(true); // change to false to test redirect
  return { isAuthenticated };
};
