import React, { useState } from 'react';
import Form from './Form';

import './App.css';

function App() {
  const [teammember, setTeammember] = useState({
      name: 'Danielle B',
      email: 'danib@ls.com',
      role: 'Sr Web Dev'
  })
  return (
    <div className="App">
      <h1>Teammember List:</h1>
        <Form setTeammember={setTeammember} />
        <div>
          <h2>Name: {teammember.name}</h2>
          <h4>E-mail: {teammember.email}</h4>
          <p>Role: {teammember.role}</p>
        </div>
    </div>
  );
}

export default App;
