import React, { useState } from 'react';

const Form = () => {
  const [newTeam, setNewTeam] = useState({
    name: '',
    email: '',
    role: ''
  });

  const handleChange = event => {
    console.log(event);
  }

  return(
    <div className='form-container'>
      <form>
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