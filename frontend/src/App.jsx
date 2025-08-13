import { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('Loading...');
  const API_URL = import.meta.env.VITE_API_URL || 'https://complementary-assessment.onrender.com';

  useEffect(() => {
    fetch(`${API_URL}/api/message`)
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch(() => setMessage('Error fetching message'));
  }, [API_URL]);

  return (
    <div style={{ padding: 20 }}>
      <h1>Complementary Assessment</h1>
      <p>Message from API: {message}</p>
    </div>
  );
}

export default App;
