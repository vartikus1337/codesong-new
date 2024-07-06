import React from 'react';

export function App(props) {
  return (
    <div className='App'>
      <h1>Hello React.</h1>
      <h2>Start editing to see some magic happen!</h2>
      <CreateFoo list={['test', 'test2']} />
    </div>
  );
}

console.log('Hello console');

const CreateFoo = ({ list }) => {
  return (
    <ul>
      {list.map((el, index) => <li key={index}>{el}</li>)}
    </ul>
  );
}