import React from 'react';
import './App.css';
import Private from './components/auth/Private';
import Profile from './components/auth/Profile';
import ButtonCustom from './components/ButtonCustom';
import Container from './components/Container';
import CustomComponent from './components/extracting/customComponent';
import List from './components/generics/List';
import Greet from './components/Greet';
import Heading from './components/Heading';
import InputCustom from './components/InputCustom';
import Oscar from './components/Oscar';
import Person from './components/Person';
import PersonList from './components/PersonList';
import DomRef from './components/ref/DomRef';
import RandomNumber from './components/restriction/RandomNumber';
import Counter from './components/state/Counter';
import LoggedIn from './components/state/LoggedIn';
import User from './components/state/User';
import Status from './components/Status';
import Toast from './components/templateLiterals/Toast';

function App() {
  const personName = {
    first: 'Bruce',
    last: 'Wayne'
  }
  const nameList = [
    {
      first: 'Bruce',
      last: 'Wayne'
    },
    {
      first: 'Clark',
      last: 'Kent'
    },
    {
      first: 'Son',
      last: 'Goku'
    }
  ]
  return (
    <div className="App">
      <header className="App-header">
        <Greet name ='Vishmassss' messageCount={11} isLoggedIn={false} />
        <Person name={personName}/>
        <PersonList names={nameList} />
      </header>
      <Status status='loading'/>
      <Heading>
        Placeholder text
      </Heading>
      <Oscar>
        <Status status='error'/>
      </Oscar>
      <ButtonCustom handleClick={(event, id)=> console.log('Click me Now supri!!', event, id)} />
      <InputCustom value='' handlechange={(event)=> console.log('input change now!', event)}/>
      <br />
      <br />
      <Container styles ={{border: '1px solid black', background: 'red', color: 'black', padding: '15px'}}/>
      <br />
      <br />
      <h2>
        useStateHook
      </h2>
      <LoggedIn />
      <br />
      <br />
      <h2>
        useState future value!
      </h2>
      <User name='Paco' email='paco@paco.com'/>
      <br />
      <br />
      <h2>
        useReducer Hook!!
      </h2>
      <Counter/>
      <br />
      <h2>
        useRef Hook!!
      </h2>
      <DomRef />
      <br />
      <br />
      <h2>
        Component props!!
      </h2>
      <Private isLoggedIn={true} Component={Profile}/>
      <br />
      <br />
      <h2>
        Generic props!!
      </h2>
      <List items={['Batman', 'Spiderman']} clickFun={(item)=> console.log(item)} />
      <br />
      <br />
      <h2>
        Restricted props!!
      </h2>
      <RandomNumber value= {20} isPositive/>
      <br />
      <br />
      <h2>
        Template Literals and Exclude
      </h2>
      <Toast position='center'/>
      <br />
      <br />
      <h2>
        Extracting a Components Prop Types
      </h2>
      <CustomComponent name ='Vishmassss' messageCount={11} isLoggedIn/>
      <br />
      <br />      
    </div>
  );
}

export default App;
