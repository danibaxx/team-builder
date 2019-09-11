import React, { useState } from 'react';
import Form from './Form';
import List from './List';

import './App.css';

function App() {
  const [teammembers, setTeammembers] = useState({
      name: 'Danielle B',
      email: 'danib@ls.com',
      role: 'Sr Web Dev'
  })
  return (
    <div className="App">
      <h1>Teammember List:</h1>
      <Form 
        teammembers={teammembers} 
        setTeammembers={setTeammembers} 
      />
      <List teammembers={teammembers} />
    </div>
  );
}

export default App;
