import { useState } from 'react'
import './App.css'

function App() {
  const [Shayari, setShayari] = useState([
    {
      id: 1,
      title: "Nothing is better than your smile,",
      content: "It brings peace to my heart every day."
    },
    {
      id: 2,
      title: "I know how to play with hearts,",
      content: "But I don’t break the toy that I love."
    },
    {
      id: 3,
      title: "Every gesture of yours feels like love,",
      content: "Even a moment of separation feels like a catastrophe."
    },
    {
      id: 4,
      title: "Love isn’t about making you mine,",
      content: "Love is about not letting you belong to anyone else."
    },
    {
      id: 5,
      title: "She says she remembers me every day,",
      content: "I said, 'This is love, not a habit.'"
    }
  ]);

  const addShayari = () => {
    const newShayari = {
      id: Shayari.length + 1,
      title: "New Shayari",
      content: "This is a new Shayari added dynamically."
    };
    setShayari([...Shayari, newShayari]);
  };

  return (
    <>
      <h1>SOME LOVE WORDS 
        CREATED BY ANSHUL
      </h1>
      <p>Number of Shayari: {Shayari.length}</p>
      <ul>
        {Shayari.map((item) => (
          <li key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.content}</p>
          </li>
        ))}
      </ul>
      <button onClick={addShayari}>Add Shayari</button>
    </>
  )
}

export default App;
