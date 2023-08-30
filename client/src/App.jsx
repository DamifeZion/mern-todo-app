import { BrowserRouter, Routes, Route } from "react-router-dom";

//Component Imports
import { Home } from "./pages/exportPages";
import { Navbar } from "./components/exportComponents";

function App() {
  return (
    <div>
      <BrowserRouter>
        <div className=" sticky top-0 z-[100]">
          <Navbar />
        </div>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
