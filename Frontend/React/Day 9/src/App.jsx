import { useState } from 'react'


function App() {
  const [name,setName] = useState('');
  const [age,setAge] = useState('');
  const [password,setPassword] = useState('');
    
     function handleSubmit(e) {
          e.preventDefault();
          console.log(name);
          console.log(age);
          console.log(password);     
     }

  return (
    <>
       <form onSubmit={handleSubmit}>
        <div>
          <input value={name} onChange={(e) => setName(e.target.value)} type="text" />
        </div>
         <div>
          <input value={age} onChange={(e) => setAge(e.target.value)} type="number" />
        </div>
         <div>
          <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
        </div>
        <button>Submit</button>
       </form>
    </>
  )
}

export default App;
