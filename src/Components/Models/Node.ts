import React from "react";
import { CustomField } from "./CustomField";

export interface Node{

    id: number,
    label:string,
    descriere:string,
    parent?:Node ,
    //subordinates: Node[],
    subordinates: Node[],
    // cfields:Set<CustomField>
    
}