import React from "react";
import "./App.css";

function App({ children }: { children?: React.ReactNode }) {
  // I can add context here for instance
  return <div className="App">{children}</div>;
}

export default App;
