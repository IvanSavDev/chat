import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

export default function AuthRequire({ children }) {
  const { loggedIn } = useAuth();
  const location = useLocation();
  console.log(loggedIn);

  if (!loggedIn) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
}
