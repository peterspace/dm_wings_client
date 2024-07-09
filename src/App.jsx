import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import Home from "./pages/Home";
import Purchases from "./pages/Purchases";
import Leads from "./pages/Leads";
import SignUp from "./pages/SignUp";

// axios.defaults.withCredentials = true;

function App() {
  return (
    <div className="w-full h-screen bg-figma-400">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign_up" element={<SignUp />} />
          {/* =================={ Purchases Routes }=========================== */}
          <Route path="/purchases" element={<Purchases />} />
          <Route path="/purchases/:external_id" element={<Purchases />} />
          <Route
            path="/purchases/:fbclid/:external_id"
            element={<Purchases />}
          />

          <Route
            path="/purchases/:client_ip_address/:fbclid/:external_id"
            element={<Purchases />}
          />
          {/* =================={ Leads Routes }=========================== */}

          <Route path="/leads" element={<Leads />} />
          <Route path="/leads/:external_id" element={<Leads />} />
          <Route path="/leads/:fbclid/:external_id" element={<Leads />} />
          <Route
            path="/leads/:client_ip_address/:fbclid/:external_id"
            element={<Leads />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
