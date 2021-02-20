import React, { useState, useEffect } from "react";

const UseStateExample = () => {
  const [name, setName] = useState("Miguel");
  const [address, setAddress] = useState("Mexico");

  return (
    <div>
      <h1>{name}</h1>
      <h1>{address}</h1>
      <button onClick={() => setName("Angel")}>Change Name</button>
      <button onClick={() => setAddress("USA")}>Change Address</button>
    </div>
  );
};

const UseEffectExample = () => {
  const [user, setUser] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (searchQuery.length > 0) {
      const fetchFunc = async () => {
        console.log("Hi there");
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users?username=${searchQuery}`
        );
        const data = await response.json();
        setUser(data[0]);
      };
      fetchFunc();
    }
  }, [searchQuery]);

  function handleInputChange(event) {
    setSearchQuery(event.target.value);
  }

  return (
    <div>
      <input type="search" value={searchQuery} onChange={handleInputChange} />
      {user ? (
        <div>
          <h3>{user.name}</h3>
          <h3>{user.username}</h3>
          <h3>{user.email}</h3>
        </div>
      ) : (
        <p>No user found</p>
      )}
    </div>
  );
};

export default UseEffectExample;
