/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import { useLocation, Navigate } from "react-router-dom";

const RequireAuth = ({ children }) => {
  const { auth } = useSelector((state) => state.authSlice);
  const location = useLocation();

  return auth ? (
    children
  ) : (
    <Navigate
      to={"/login"}
      replace
      state={{ path: location.pathname }}
    ></Navigate>
  );
};

export default RequireAuth;
