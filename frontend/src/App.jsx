import { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('Loading...');

  useEffect(() => {
    fetch('http://localhost:4000/api/message')
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch(() => setMessage('Error fetching message'));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Complementary Assessment</h1>
      <p>Message from API: {message}</p>
    </div>
  );
}

export default App;
