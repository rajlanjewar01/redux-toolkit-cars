import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CarForm from "./components/CarForm";
import CarList from "./components/CarList";

function App() {
  return (
    <>
      <CarForm />
      <CarList />
    </>
  );
}

export default App;
