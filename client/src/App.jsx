import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Component Imports
import {
  Home,
  About,
  Login,
  PasswordReset,
  Signup,
  MyDay,
} from "./pages/exportPages";

import { useSelector, useDispatch } from "react-redux";
import { RequireAuth } from "./middleWares/exportMiddleWare";
import { userSlice } from "./features/slices/exportSlices";

function App() {
  const dispatch = useDispatch();
  
  //Check on first mount if user is logged in from local storage
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      dispatch(userSlice.actions.setUser(user));
    }
  }, [dispatch]);

  return (
    <div>
      <Router>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
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
        </main>
      </Router>
    </div>
  );
}

export default App;
