import React, { useState } from "react";

function App() {
  const [fname, setfname] = useState({
    first: "",
    last: ""
  });
  function try1(event) {
    const value = event.target.value;
    if (event.target.name === "fName") {
      setfname((prevValue) => {
        return { first: value, last: prevValue.last };
      });
    } else if (event.target.name === "lName") {
      setfname((prevValue) => {
        return { first: prevValue.first, last: value };
      });
    }
  }
  return (
    <div className="container">
      <h1>
        Hello {fname.first} {fname.last}
      </h1>
      <form>
        <input
          onChange={try1}
          name="fName"
          placeholder="First Name"
          value={fname.first}
        />
        <input
          onChange={try1}
          name="lName"
          placeholder="Last Name"
          value={fname.last}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
