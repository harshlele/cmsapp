
import './App.css';
import {useState} from 'react';

function App() {

  const [user,setUser] = useState('');
  const [pass,setPass] = useState('');
  
  const login = async () => {
    let body = {user,pass};

    fetch('/login',{
      method: 'POST',
      headers: {"Content-type": "application/json;charset=UTF-8"},
      body: JSON.stringify(body)
    })
    .then(r => r.json())
    .then(res => {
      console.log(res);
    })
    .catch(e => {
      console.error(e);
    })
  };

  return (
    <div className='App flex'>
      <div className='mt-16 md:mt-32 p-8 login mx-auto w-10/12 md:w-1/3 h-80 border-2 border-green-600 rounded-lg'>
        <div className='text-2xl md:text-5xl mb-8'>Login</div>
        <input type='email' className='w-11/12 text-lg md:text-xl px-2 py-2 border-2 active:border-green-300 my-2' placeholder='Username...' id='user' value={user} onChange={(e) => {setUser(e.target.value)}}/>
        <input type='password' className='w-11/12 text-lg md:text-xl px-2 py-2 border-2 active:border-green-300' placeholder='Password...' id='passwd' value={pass} onChange={(e) => {setPass(e.target.value)}}/>
        <button className='my-2 border-2 border-green-800 rounded-md px-5 py-2 active:text-white active:bg-green-700' onClick={login}>Login</button>
      </div>
    </div>
  );
}

export default App;
