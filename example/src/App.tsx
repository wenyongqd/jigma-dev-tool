import React, {useEffect} from 'react';
// import {DevTools} from '../../src'
import {DevTools} from 'jira-dev-tool3'

// const apiUrl = process.env.REACT_APP_API_URL
const apiUrl = 'http://localhost:3001';
console.log("API: " + apiUrl);
function App() {
  useEffect(() => {
    window.fetch(`${apiUrl}/projects`)
  }, [])
  return (
    <div className="App">
      <span>test Weny</span>
      <span>{apiUrl}</span>
      <DevTools />
    </div>
  );
}

export default App;
