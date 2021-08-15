import React from "react";
import "./bootstrap";
import Button from "./components/atoms/button";

function App() {
  return (
    <div>
      dubu.finance
      <Button
        fill
        label="Let's dubu!"
        onClick={() => console.log("Hello, dubu!")}
      />
    </div>
  );
}

export default App;
