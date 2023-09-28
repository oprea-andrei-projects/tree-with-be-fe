import React ,{useEffect, useState}from 'react';
import './App.css';
import { TheCard } from './Components/Home/TheCard';
import { Node } from './Components/Models/Node';
import Home from './Components/Home/Home';
import Api from './services/Api';
import { Tree } from 'primereact/tree';
import ControlledDemo from './Components/Exemplu/NewComp';
import NewComp from './Components/Exemplu/NewComp';

function App() {


  // let [nodes, setNodes]= useState<Node[]>([]);


  // let api = new Api();

  // useEffect(()=>{

  //   getTheNodes();

  // },[]);

  // let getTheNodes = async(): Promise<void> => {

  //   let theNodes = await api.getAllNodes();
  
  //   setNodes(theNodes);

  // }



  

  return (

 

   
    <NewComp />
      
    
  );
}

export default App;
