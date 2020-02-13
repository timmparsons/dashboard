import React, {useEffect, useState } from 'react';
import './App.css';

function App() {
  const res = useFetch('https://jsonplaceholder.typicode.com/todos/1', {});
  if(!res.response) {
    return <div> Loading...</div>
  }
  const loanId = res.response.id;
  const description = res.response.title;
  return (
    <div>
      <h1>{loanId}</h1>
      <p>{description}</p>
    </div>
  )
}

const useFetch = (url, options) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url, options);
        const json = await res.json();
        setResponse(json);
      } catch (error) {
        setError(error)
      }
    };
    fetchData();
  })
  return {response, error}
}

export default App;
