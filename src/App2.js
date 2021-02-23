import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = ['Anwar', 'Jafor', 'Alomgir', 'Salman']
  // var name = 'Dr. Mahfuz'
  //beacase they are not called
  const person = {
    name: 'Dr. Mahfuz',
    job: "Singer"
  }
  const person2 = {
    name: 'Eva Rahman',
    job: "Kokil kondi"
  }
  const style = {
    color: 'red',
    backgroundColor: 'yellow'
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 style={{ color: 'orange' }}>Now I am React Person</h1>
        {/* <h1 className='' style={style}>My heading {(2 + 5) * 25 + 65}</h1>
        <h1>Name:{person.name + ' ' + person.job}</h1>
        <h3 style={{
          color: 'yellow',
          backgroundColor: 'cyan'
        }}>Singer:{person2.name + ' ' + person2.job}</h3>
        <p>My first React paragraph</p> */}
        {/* <Person3 name="Rubel Nayok" nayika="Moushumi"></Person3> */}
        <Person3 name={nayoks[0]} nayika="Moushumi"></Person3>
        <Person3 name="Jasim" nayika="Shabana"></Person3>
        <Person3 name="BappaRaz" nayika="Cheka"></Person3>
        <Person3 name="Elias K" nayika="Bobita"></Person3>
      </header>
    </div>
  );
}

function Person3(props) {
  const personStyle = {
    border: '2px solid red',
    margin: '10px',
    width: '500px'
  }
  console.log(props);
  return (
    //   <div style={{ border: '2px solid yellow', margin: '10px' }}>
    //     <h1>Name:Motiullah Sajit</h1>
    //     <h3>Hero of the year</h3>
    //   </div>
    <div style={personStyle}>
      <h1>Nayok:{props.name}</h1>
      <h3>Hero of {props.nayika}</h3>
    </div>
  )
}


export default App;

//
/*
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Now I am a react Person</p>
        <Person name="Munna" job="football"></Person>
        <Person name="Masum" job="Dorshok"></Person>
        <Person></Person>
      </header>
    </div>
  );
}

function Person(props) {
  return (
    <div style={{ border: '2px solid gold', width: '400px', margin: '10px' }}>
      <h3>My Name:{props.name}</h3>
      <p>My Profession:{props.job}</p>
    </div>
  )
}

export default App;


*/ 