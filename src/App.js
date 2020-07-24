import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = props => {
  const [personsState, setPersonsState] = useState(
    {
      persons: [
        { name: 'Milan', age: 25 },
        { name: 'Zoran', age: 21 },
        { name: 'Vitomir', age: 32 }
      ],
      //otherState: 'Some other value'
    }
  );

  //const [otherState, setOtherState] = useState({otherState: 'some other value'});
  //console.log(personsState, otherState);

  const switchNameHandler = (newName) => {
    //console.log('Was clicked.');
    // DONT OD THIS -> this.state.persons[1].name = 'ZORAN!!!!';
    setPersonsState({
      persons: [
        { name: 'Milan', age: 25 },
        { name: 'ZORANNN!!!', age: 21 },
        { name: newName, age: 30 }
      ]
    })
  }

  const nameChangedHandler = (event) => {
    setPersonsState({
      persons: [
        { name: event.target.value, age: 25 },
        { name: 'ZORANNN!!!', age: 21 },
        { name: 'Vitomir', age: 32 }
      ]
    })
  }

  const style = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer'
  };

  return (
    <div className="App">
      <h1>Hello, I'm a React App.</h1>
      <p>This is really working.</p>
      <button
        style={style}
        onClick={switchNameHandler.bind(this, 'Maximilian')}>Switch Name</button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
        changed={nameChangedHandler} />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
        click={switchNameHandler.bind(this, 'MAX!!')}>My Hobbies: Racing</Person>
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age} />

    </div>
  );
  //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
}

export default App;

// state = {
//   persons: [
//     { name: 'Milan', age: 25 },
//     { name: 'Zoran', age: 21 },
//     { name: 'Vitomir', age: 32 }
//   ]
// }

// switchNameHandler = () => {
//   //console.log('Was clicked.');
//   // DONT OD THIS -> this.state.persons[1].name = 'ZORAN!!!!';
//   this.setState({
//     persons: [
//     { name: 'Milan', age: 25 },
//     { name: 'ZORANNN!!!', age: 21 },
//     { name: 'Vitomir', age: 30 }
//   ]
//  })
// }
