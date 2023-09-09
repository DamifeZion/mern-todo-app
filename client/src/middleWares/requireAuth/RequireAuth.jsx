/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const RequireAuth = ({ children }) => {
  const location = useLocation();
  const { user } = useSelector((state) => state.userSlice);

  return user ? (
    children
  ) : (
    <Navigate 
      to={"/login"} 
      replace 
      state={{ path: location }}>
    </Navigate>
  );
};

export default RequireAuth;
