import { BrowserRouter, Routes, Route } from "react-router-dom";

//Component Imports
import {
  //user not need be authorized
  Home,
  About,
  Login,
  PasswordReset,
  Signup,

  //user must be authorized
  Dashboard,
} from "./pages/exportPages";

import { RequireAuth } from "./middleWares/exportMiddleWare";

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
              path="/dashboard"
              element={
                <RequireAuth>
                  <Dashboard />
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
