import React from 'react';

function Facts(props) {
  return (
    <ul>
      {props.facts.map(fact => {
        return (
          <li
            key={fact.text}
            style={{ textDecoration: fact.strike ? 'line-through' : 'none' }}
          >
            {fact.text}
            <button onClick={() => props.deleteFact(fact)}>Delete Fact</button>
          </li>
        );
      })}
    </ul>
  );
}

export default Facts;
