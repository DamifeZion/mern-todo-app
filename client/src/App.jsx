import { useLayoutEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useMediaQuery } from "@mui/material";

// Component Imports
import { Home, Login, PasswordReset, Signup, MyDay } from "./pages/exportPages";
import { SmallScreens } from "./components/exportComponents";
import { RequireAuth } from "./middleWares/exportMiddleWare";
import { authenticateUser } from "./middleWares/exportMiddleWare";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const largeScreens = useMediaQuery("(min-width: 1200px)");

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
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/password/reset" element={<PasswordReset />} />
        <Route path="*" element={"404 Page Not Found"} />

        {/* User must be authorized to access the below */}
        <Route
          path="/dashboard/myday"
          element={
            largeScreens ? (
              <RequireAuth>
                <MyDay />
              </RequireAuth>
            ) : (
              <SmallScreens />
            )
          }
        />
      </Routes>
    </div>
  );
}

export default App;
