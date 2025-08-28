import React, { useState, useEffect } from "react";

const Day20 = () => {
  // state for storing API data
  const [items, setItems] = useState([]);
  // state for showing loading message
  const [loading, setLoading] = useState(true);
  // state for handling errors
  const [error, setError] = useState(null);

  useEffect(() => {
    // function with async/await for fetching data
    const fetchData = async () => {
      try {
        // fetch API call
        const res = await fetch("https://jsonplaceholder.typicode.com/users");

        // if response is not ok (status not 200-299), throw error
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }

        // parse JSON response
        const data = await res.json();

        // save data to state
        setItems(data);
      } catch (err) {
        // catch any error (network issue, server error, bad response)
        setError(err.message);
      } finally {
        // finally runs always (success or error)
        // stop showing loading message
        setLoading(false);
      }
    };

    // call the function
    fetchData();
  }, []); // [] means run only once when component mounts

  // if data is still loading
  if (loading) {
    return <h1>Loading data, please wait...</h1>;
  }

  // if there is an error in fetching data
  if (error) {
    return <h1>Error: {error}</h1>;
  }

  // if data is loaded successfully
  return (
    <div className="Day20">
      <h1>You can see the data</h1>
      <h3>Fetch data from an API in React</h3>
      <div className="container">
        {items.map((item) => (
          <div className="item" key={item.id}>
            <ol>
              <div>
                <strong>User_Name: </strong>
                {item.username}
              </div>
              <div>Full_Name: {item.name}</div>
              <div>User_Email: {item.email}</div>
            </ol>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Day20;
