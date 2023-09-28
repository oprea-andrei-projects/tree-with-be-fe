import React from "react";
import { CustomField } from "./CustomField";
import { TreeNode } from 'primereact/treenode';


export interface Node extends TreeNode{
    key:number,
    label:string,
    descriere:string,
    parent?:Node ,
    children: TreeNode[],
    expanded: boolean;
 
    
}