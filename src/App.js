import { useState } from "react";
import "./App.css";
import Modal from "./Modal/Modal";
import ShowModal from "./Modal/ShowModal";

function App() {

  const [show, setShow] = useState(false)

  return (
    <div className="App">
      <ShowModal onClick={() => setShow(true)} />
      <Modal show={show} onClose={() => setShow(false)} />
    </div>
  );
}

export default App;
