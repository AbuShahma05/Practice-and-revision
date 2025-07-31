import React, { useState } from "react";

const Day14 = () => {
  // State to manage login/logout
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Toggle function
  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  // Sample user list
  const users = [
    { id: 101, name: "Alice" },
    { id: 102, name: "Bob" },
    { id: 103, name: "Charlie" },
  ];

  return (
    <div className="p-6 font-sans">
      <h1 className="text-3xl font-bold mb-4 text-blue-600">
        Day 14: Conditional Rendering & Lists in React
      </h1>

      {/* Toggle Login State */}
      <button
        onClick={toggleLogin}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        {isLoggedIn ? "Logout" : "Login"}
      </button>

      {/* 1. Ternary Operator (if/else logic) */}
      <p className="mt-4 text-lg">
        {isLoggedIn ? " You are logged in!" : " Please log in first."}
      </p>

      {/* 2. && Operator - Only shows when true */}
      {isLoggedIn && (
        <div className="mt-6 bg-green-100 p-4 rounded-md border border-green-300">
          <h2 className="text-xl font-semibold mb-2">User List</h2>

          {/* 3. .map() with keys - Rendering a list */}
          <ul className="list-disc pl-5 space-y-1">
            {users.map((user) => (
              <li key={user.id} className="text-gray-800">
                {user.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Day14;
