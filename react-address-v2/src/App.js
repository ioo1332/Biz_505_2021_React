import "./App.css";
import AddressInput from "./comps/AddressInput";
import AddressView from "./comps/AddressView";
import { useState } from "react";

function App() {
  const [address, setAddress] = useState({
    u_name: 0,
    u_addr: "",
    u_tel: "",
    u_age: 0,
  });
  const [list, setList] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
        <AddressInput
          address={address}
          setAddress={setAddress}
          list={list}
          setList={setList}
        />
        <AddressView setList={setList} />
      </header>
    </div>
  );
}

export default App;
