import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute() {
  const { isLoggedIn } = useSelector((state) => state.users);

  // const user = { login: true };
  return isLoggedIn ? <Outlet /> : <Navigate to={"/"} replace />;
}

export default ProtectedRoute;
