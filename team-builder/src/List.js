import React from 'react';

const List = props => {
  return(
    <div>
      {props.teammembers.map((team, index) => (
        <div className='team' key={index}>
          <div>
            <h2>Name: {team.name}</h2>
            <h4>E-mail: {team.email}</h4>
            <p>Role: {team.role}</p>
          </div>
        </div>
      ))};
      </div>
  );
};

export default List;