import React, { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchResource = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setData(data[0]);
    };
    fetchResource();
  });

  return [data, setData];
}
