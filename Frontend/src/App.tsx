import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserRouts } from "./routers/UserRouts.tsx";
import { Toaster } from "sonner";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import React from "react";
import AdminRouts from "./routers/AdminRouts.tsx";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Toaster position="top-center" richColors />
        <Router>
          <Routes>
            <Route path="/*" element={<UserRouts />} />
            <Route path="/admin/*" element={<AdminRouts />} />
          </Routes>
        </Router>
      </PersistGate>
    </Provider>
  );
};

export default App;
