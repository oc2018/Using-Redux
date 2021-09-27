//import logo from './logo.svg';
//import './App.css';
import React from "react";
import Muffin from "./Muffins/Muffin"
import Muffins from "./Muffins/Muffins";

function App() {
    const muffins = Muffins.map((item) => <Muffin key={item.id} muffin ={item}/>);
  return (
        <div>
            {muffins}
        </div>
    
  );
}

export default App;
