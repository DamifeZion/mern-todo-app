import { useLayoutEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// Component Imports
import {
  Home,
  About,
  Login,
  PasswordReset,
  Signup,
  MyDay,
} from "./pages/exportPages";

import { RequireAuth } from "./middleWares/exportMiddleWare";
import { authenticateUser } from "./middleWares/exportMiddleWare";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { requireUser, handleTokenExpiration } = authenticateUser;

  useLayoutEffect(() => {
    async function fetchData() {
      await requireUser(dispatch);
      const user = JSON.parse(localStorage.getItem("user"));
      if (user) {
        navigate("/dashboard/myday");
      }
      await handleTokenExpiration();
    }

    fetchData();
  }, []);

  return (
    <div>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/password/reset" element={<PasswordReset />} />
        <Route path="*" element={"404 Page Not Found"} />

        {/* User must be authorized to access the below */}
        <Route
          path="/dashboard/myday"
          element={
            <RequireAuth>
              <MyDay />
            </RequireAuth>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
