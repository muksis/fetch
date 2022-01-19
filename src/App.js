import './App.css';
import {useEffect, useState} from 'react';

function App() {
  const [catPics, setCatPics] = useState([]);
  const fetchData = () => {
      fetch ("https://thatcopy.pw/catapi/rest/")
      .then(response => response.json())
      .then(data => setCatPics(data.url))
  }
  useEffect(fetchData, []);
  return (
    <div> 
      <h1>Just a random cat pic (=•́ܫ•̀=)</h1>
      <img src={catPics} />
    </div>
  );
}

export default App;
