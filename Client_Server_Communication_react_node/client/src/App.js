import React, { useState } from 'react';
import axios from "axios";

function App() {
  const [user, setUser] = useState('');
  const[message,setMessage]=useState(0);


  const handleSubmit = async () => {
  
      const res = await axios.post("http://localhost:8080/login", { User: user});
      console.log(res);
      setMessage(res.data.Length);
    }

  const handleUser = (event) => {
    setUser(event.target.value)
  }

  return (
    <div className="container">
      <h1 className="header">Name Length</h1>
      <label className="input-label">
        Name:
        <input type="text" className="input-field" value={user} onChange={handleUser} />
      </label>
      <div className="button-container">
        <button onClick={handleSubmit} className="button-style">Submit</button>
      </div>
      {message&&<p className="message">{message}</p>}
    
    </div>
    
  );
}

export default App;