import React from 'react';

const App = () => {
  const profiles = [
    { name: 'Taro', age: 10 },
    { name: 'Tim', age: 12 },
    { name: 'Bob', age: undefined },
  ];
  return (
    <div>
      {profiles.map((profile, index) => {
        return <User name={profile.name} age={profile.age} key={index} />;
      })}
    </div>
  );
};

const User = (props) => {
  return (
    <div>
      HEY!, I am {props.name}, and {props.age} years old!
    </div>
  );
};

User.defaultProps = {
  age: 1,
};

export default App;
