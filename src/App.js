import React from 'react';

// function App() {
//   const greeting = 'Hey';
//   const dom = <h1 className="foo">{greeting} Bob</h1>;
//   return (
//     <>
//       <label htmlFor="bar">bar</label>
//       <input
//         type="text"
//         onChange={() => {
//           console.log('I am Clicked');
//         }}
//       />
//     </>
//   );
// }

const App = () => {
  return (
    <div>
      <Cat />
      <Cat />
      <Cat />
      <Cat />
    </div>
  );
};

const Cat = () => {
  return <div>Meow!</div>;
};

export default App;
