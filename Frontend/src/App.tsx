import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserRouts } from "./routers/UserRouts";
import { Toaster } from "sonner";

function App() {
  return (
    <>
    <Toaster position="top-center" richColors/>
    <Router>
      <Routes>
        <Route path="/*" element={<UserRouts />} />
        <Route path="/admin/*" element={<UserRouts />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
