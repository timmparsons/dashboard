import React from 'react';

const CharacterList = props => {
  return (
    <ul>
      {props.char.map((character,index) => (
        <li key={index}>{character.name}</li>
      ))}
    </ul>
  )
}

export default CharacterList;

