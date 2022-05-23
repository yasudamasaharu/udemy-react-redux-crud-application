function App() {
  const greeting = 'Hey';
  const dom = <h1 className="foo">{greeting} Bob</h1>;
  return (
    <>
      <label htmlFor="bar">bar</label>
      <input
        type="text"
        onChange={() => {
          console.log('I am Clicked');
        }}
      />
    </>
  );
}

export default App;
