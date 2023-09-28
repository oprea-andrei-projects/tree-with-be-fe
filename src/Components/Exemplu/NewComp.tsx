
import React, { useState, useEffect } from 'react';
import { Tree, TreeExpandedKeysType } from 'primereact/tree';
import { TreeNode } from 'primereact/treenode';
import { Button } from 'primereact/button';
import { NodeService } from './NodeService';
import Api from '../../services/Api';

export default function ControlledDemo() {
  
    const [nodes, setNodes] = useState<TreeNode[]>([]);
    const [expandedKeys, setExpandedKeys] = useState<TreeExpandedKeysType>({'0': true, '0-0': true});



    const expandAll = () => {
        let _expandedKeys = {};

        for (let node of nodes) {
            expandNode(node, _expandedKeys);
        }

        setExpandedKeys(_expandedKeys);
    };

    const collapseAll = () => {
        setExpandedKeys({});
    };

    const expandNode = (node: TreeNode, _expandedKeys: TreeExpandedKeysType) => {
        if (node.children && node.children.length) {
            _expandedKeys[node.key as number] = true;

            for (let child of node.children) {
                
                    expandNode(child, _expandedKeys);
                
                
            }
        }
    };

   

    
   



let api=new Api();

    
 let getTheNodes = async(): Promise<void> => {

    let theNodes = await api.getAllNodes();


    let objects = theNodes.filter(item => typeof item === 'object');

    console.log(objects);

    setNodes(objects);

  }


    useEffect(() => {
     
       getTheNodes();
      }, []);



    
    
    return (
        <div className="card flex flex-column align-items-center">
  

       
            <Tree value={nodes} expandedKeys={expandedKeys} onToggle={(e) => setExpandedKeys(e.value)} className="w-full md:w-30rem" />


        </div>
    )
}
        