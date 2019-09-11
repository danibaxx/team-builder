import React, { useState } from 'react';

const Form = props => {
  const [newTeam, setNewTeam] = useState({
    name: '',
    email: '',
    role: ''
  });

  const handleChange = event => {
    console.log(event);
    setNewTeam({
      ...newTeam,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (!newTeam.name || !newTeam.email || !newTeam.role) {
      alert("All fields are required");
    } else {
      props.setNewTeam([
        newTeam,
        ...props.newTeam
      ]);
    }
  };

  return(
    <div className='form-container'>
      <form onSubmit={handleSubmit}>
        <input 
          type='text' 
          name='name' 
          placeholder='Name'
          onChange={handleChange}
          value={newTeam.name} 
        />
        <input 
          type='email' 
          name='email' 
          placeholder='E-mail'
          onChange={handleChange}
          value={newTeam.email}  
        />
        <input 
          type='text' 
          name='role' 
          placeholder='Role'
          onChange={handleChange}
          value={newTeam.role}  
        />
        <button>Add Team Member</button>
      </form>
    </div>
  ) 
};

export default Form;