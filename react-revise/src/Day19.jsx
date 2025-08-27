// React Router practice file

// Step 1: Install react-router-dom
// npm install react-router-dom

import React from "react";
import { BrowserRouter, Routes, Route, Link, useNavigate, useParams } from "react-router-dom";

// Home Component
function Home() {
  return (
    <div>
      <h2>Home Page</h2>
      <Link to="/about">Go to About</Link><br />
      <Link to="/user/101">Go to User 101</Link><br />
      <Link to="/user/202">Go to User 202</Link><br />
    </div>
  );
}

// About Component with useNavigate
function About() {
  const navigate = useNavigate();
  return (
    <div>
      <h2>About Page</h2>
      <button onClick={() => navigate("/")}>Go to Home</button>
    </div>
  );
}

// Dynamic Route Component
function User() {
  const { id } = useParams();
  return (
    <div>
      <h2>User Page</h2>
      <p>User ID: {id}</p>
    </div>
  );
}

// 404 Not Found Component
function NotFound() {
  return (
    <div>
      <h2>404 - Page Not Found</h2>
      <Link to="/">Back to Home</Link>
    </div>
  );
}

// Main App Component
export default function Day19() {
  return (
    <BrowserRouter>
      <div>
        <h1>React Router Practice</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/user/:id" element={<User />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
