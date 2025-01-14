import { useState } from 'react';
import reactLogo from './assets/react.svg'; // If not used, remove this line
import viteLogo from '/vite.svg'; // If not used, remove this line
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 id="Heading">How h1 Looks Like</h1>
      <p id="Paragraph">
        This is a paragraph. You can type stuff you want to see here.
      </p>
      <p id="Next">This is used for another paragraph.</p>
      <div>
        <button onClick={() => setCount(count + 1)}>Count is {count}</button>
      </div>
    </>
  );
}

export default App;

