import React, {useState, useEffect} from 'react'

function App() {

  const [data, setData] = useState(null)

  useEffect(() => {
      fetch('/api')
      .then(response => response.json())
      .then(response => setData(response.food.id))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <p>
          {
            !data ? "Loading..." : data
          }
        </p>
      </header>
    </div>
  );
}

export default App;
