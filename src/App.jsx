import React from "react";
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./pages/Home/HomePage.jsx";
import TweetsPage from "./pages/Tweets/TweetsPage.jsx";
import Layout from "./components/Layout/Layout";

export default function App() {
  return (
    <HashRouter hashType="slash">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/tweets" element={<TweetsPage />} />
        </Route>
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </HashRouter>
  );
}
