import React ,{useEffect, useState}from 'react';
import './App.css';
import { TheCard } from './Components/Home/TheCard';
import { Node } from './Components/Models/Node';
import Home from './Components/Home/Home';
import Api from './services/Api'
import TreeNode from './Components/TreeStructure/TreeNode';

function App() {


  let [nodes, setNodes]= useState<Node[]>([]);


  let api = new Api();

  useEffect(()=>{

    getTheNodes();

  },[]);

  let getTheNodes = async(): Promise<void> => {

    let theNodes = await api.getAllNodes();
  
    setNodes(theNodes);

  }



  return (
    <div className="App">

      <TreeNode node={nodes[0]} />
      
    </div>
  );
}

export default App;
