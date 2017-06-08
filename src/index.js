import React from 'react';
import ReactDOM from 'react-dom';

const Greeter = () => {
  return <h2>365 days later...</h2>;
}

ReactDOM.render(
  <Greeter />,
  document.querySelector("#root")
);
