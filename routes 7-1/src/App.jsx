import {Suspense} from 'react'
import { lazy } from "react";

import { useNavigate } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const Dashboard = lazy(() => import("./components/Dashboard"));
const Landing = lazy(() => import("./components/Landing"));

function App() {
  return (
    <div>
      <BrowserRouter>
        <AppBar />
        <Suspense fallback={<div>Loading ...</div>}>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Landing />} />
        </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

function AppBar() {
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Landing Page
      </button>
      <button
        onClick={() => {
          navigate("/dashboard");
        }}
      >
        Dashboard Page
      </button>
    </div>
  );
}

export default App;
