/* eslint-disable react/prop-types */
import { useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { userSlice } from "../../features/slices/exportSlices";

const RequireAuth = ({ children }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.userSlice);

  useLayoutEffect(() => {
    if (!user) {
      navigate("/login");
    } else {
      dispatch(userSlice.actions.setUser(user));
    }
  }, [dispatch, user, navigate]);

  return user ? children : null;
};

export default RequireAuth;
