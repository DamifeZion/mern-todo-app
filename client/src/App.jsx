import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";

//Component Imports
import {
  //user not need be authorized
  Home,
  About,
  Login,
  PasswordReset,
  Signup,

  //user must be authorized
  MyDay,
} from "./pages/exportPages";

import { useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RequireAuth } from "./middleWares/exportMiddleWare";
import { userSlice } from "./features/slices/exportSlices";

function App() {

  return (
    <div>
      <BrowserRouter>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/password/reset" element={<PasswordReset />} />
            <Route path="*" element={"404 Page Not Found"} />

            {/*User must be authorized to access the below*/}
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
      </BrowserRouter>
    </div>
  );
}

export default App;
