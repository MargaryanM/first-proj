import React, { useState } from "react";
import { ChildComp } from "./ChildComp";

function App() {
  const [value, setValue] = useState("");

  const handleInputChange = (value) => {
    setValue(value);
    console.log(value);
  };

  return (
    <>
    <ChildComp value={value} handleInputChange = {handleInputChange}/>
   </>
    );

};

export default App;
