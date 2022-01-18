import React,{useState} from "react";
import './App.css';
import Header from "./Components/Header/index" ;
import ListCard from "./Components/ListCard";

function App() {
  return (
    <div className="App">

        <Header/>
        <ListCard/>

    </div>
  );
}

export default App;
