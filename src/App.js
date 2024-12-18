// import logo from './logo.svg';
// import './App.css';

import Navbar from "./Components/Navbar";
import Card from './Components/Card'
import Modal from "./Components/Modal";
import { useState } from "react";

function App() {
  const [data, setData] = useState([]);
  console.log(data);

  return (
    <>
      <Navbar />
      <div className="container text-center bg-info-subtle">
        <h1 className="my-5">AI-Powered Journal with Mood Analysis</h1>
        <h2 className="my-5">How's your day</h2>
        {/* <!-- Button trigger modal --> */}
        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
          Write
        </button>
        <Modal data={data} setData={setData} />
      </div>
      {
        data.map((element, index) => {
          return (<div className="container" key={element.time}>
            <Card time={element.time} text={element.text} />
          </div>)
        })
      }
    </>
  );
}

export default App;
