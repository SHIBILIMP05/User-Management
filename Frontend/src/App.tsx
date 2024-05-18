import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserRouts } from "./routers/UserRouts.tsx";
import { Toaster } from "sonner";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import React from "react";
const App:React.FC=()=> {
  return (
    <Provider  store={store}>
    <Toaster position="top-center" richColors/>
    <Router>
      <Routes>
        <Route path="/*" element={<UserRouts />} />
        <Route path="/admin/*" element={<UserRouts />} />
      </Routes>
    </Router>
    </Provider>
  );
}

export default App;
