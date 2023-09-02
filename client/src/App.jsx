import { BrowserRouter, Routes, Route } from "react-router-dom";

//Component Imports
import {
  Home,
  About,
  Login,
  PasswordReset,
  Signup,
  Dashboard,
} from "./pages/exportPages";

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
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/password/reset" element={<PasswordReset />} />
            <Route path="*" element={"404 Page Not Found"} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
