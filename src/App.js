import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const nayoks = ['Razzak', 'Salman', 'Sakib', 'Shuvo', 'Sajit', 'Moti']
  const products = [
    { name: 'Photoshop', price: '$90.99' },
    { name: 'Illustrator', price: '$60.99' },
    { name: 'PDF Reader', price: '$6.99' },
    { name: 'Premiere El', price: '$249.99' }
  ]
  return (
    <div className="App">
      <header className="App-header">
        <p style={{ color: 'red' }}>Now I am a react Person</p>
        <Counter></Counter>
        <Users></Users>
        <ul style={{ listStyle: 'none', color: 'red' }}>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>
        {
          products.map(pd => <Product product={pd}></Product>)
        }
        <Person name="MOti" job="football"></Person>
        <Person name="Masum" job="Dorshok"></Person>
        <Person></Person>
      </header>
    </div>
  );
}

//to show user 
function Users() {
  const [user, setUsers] = useState([]);
  useEffect(() => {
    const loadData = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await res.json()
      setUsers(data);
    }
    loadData();
  }, [])
  return (
    <div>
      <h3>Dynamic Users: {user.length}</h3>
      <ul style={{ listStyle: 'none', textAlign: 'left' }}>
        {
          user.map(user => <li>{user.name}, phone numer-{user.phone}, user email-{user.email}</li>)
        }
      </ul>
    </div>
  )
}

// counet increase , decrease
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onMouseMove={() => setCount(count + 1)}> Increse</button>
      <br />
      <button onClick={() => count > 0 && setCount(count - 1)}>Decrese</button>
    </div>
  )
}

//showing product
function Product(props) {
  const productStyle = {
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height: '250px',
    width: '250px',
  }
  const { name, price } = props.product;
  return (
    <div style={productStyle}>
      <h3>{name}</h3>
      <h5>{price}</h5>
      <button>Buy now</button>
    </div>
  )
}

//show person manually
function Person(props) {
  return (
    <div style={{ border: '2px solid gold', width: '400px', margin: '10px' }}>
      <h3>My Name:{props.name}</h3>
      <p>My Profession:{props.job}</p>
    </div>
  )
}

export default App;
