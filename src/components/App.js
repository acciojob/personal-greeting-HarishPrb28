import "./../styles/App.css";
import React, { useState } from "react";

const App = () => {
  let [name, setName] = useState("");

  return (
    <div>
      <label htmlFor="">Enter Your Name:</label>
      <br />
      <input
        type="text"
        onInput={(e) => {
          setName(e.currentTarget.value);
        }}
      />
      <p>{`Hello ${name}!`}</p>
    </div>
  );
};

export default App;
