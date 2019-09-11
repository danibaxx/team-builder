import React from 'react';
import Form from './Form';


import './App.css';

function App() {
  // const [teammembers, setTeammembers] = useState({
  //     name: 'Danielle B',
  //     email: 'danib@ls.com',
  //     role: 'Sr Web Dev'
  // })
  return (
    <div className="App">
      <h1>Teammember List:</h1>
      <Form />
    </div>
  );
}

export default App;
