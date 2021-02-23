import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const nayoks = ['Razzak', 'Salman', 'Sakib', 'Shuvo', 'Sajit']
  const nayokNames = nayoks.map(nayok => nayok)
  // console.log(nayokNames);
  const products = [
    { name: 'Photoshop', price: '$90.99' },
    { name: 'Illustrator', price: '$60.99' },
    { name: 'PDF Reader', price: '$6.99' },
    { name: 'Premiere El', price: '$249.99' }
  ]
  // const productNames = products.map(product => product.name)
  // console.log(productNames);
  return (
    <div className="App">
      <header className="App-header">
        <p>Now I am a react Person</p>
        <Counter></Counter>
        <Users></Users>
        <ul style={{ listStyle: 'none', color: 'red' }}>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
          {
            products.map(product => <li>{product.name}</li>)
          }
          {/* <li>{nayoks[0]}</li>
          <li>{nayoks[1]}</li>
          <li>{nayoks[2]}</li>
          <li>{nayoks[3]}</li> */}
        </ul>
        {/* <Product name={products[0].name} price={products[0].price}></Product> */}
        {
          products.map(pd => <Product product={pd}></Product>)
        }
        {/* <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Product product={products[2]}></Product> */}
        <Person name="MOti" job="football"></Person>
        <Person name="Masum" job="Dorshok"></Person>
        <Person></Person>
      </header>
    </div>
  );
}

function Users() {
  const [user, setUsers] = useState([]);
  useEffect(() => {
    const loadData = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await res.json()
      setUsers(data);
    }
    loadData();
    // fetch('https://jsonplaceholder.typicode.com/users')
    //   .then(res => res.json())
    //   .then(data => setUsers(data));
    // console.log('calling effect')
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


function Counter() {
  const [count, setCount] = useState(0);
  // const handledecrease = () => {
  //   if (count > 0) {
  //     const newCount = count - 1;
  //     setCount(newCount)
  //   }
  // };
  // const handleIncrease = () => setCount(count + 1);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onMouseMove={() => setCount(count + 1)}> Increse</button>
      <br />
      {/* <button onClick={handledecrease}>Decrese</button> */}
      <button onClick={() => count > 0 && setCount(count - 1)}>Decrese</button>
    </div>
  )
}


function Product(props) {
  const productStyle = {
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height: '250px',
    width: '250px',
    // float: 'left'
  }
  // console.log(props)
  //desturing object
  const { name, price } = props.product;
  // console.log(name, price);

  return (
    <div style={productStyle}>
      <h3>{name}</h3>
      <h5>{price}</h5>
      <button>Buy now</button>
    </div>
  )
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
