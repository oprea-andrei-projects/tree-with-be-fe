import React,{useEffect} from "react";
import { TheCard } from "./TheCard";
import { Node } from "../Models/Node";

interface HomePageProps{

    nodes:Node[];

}



const Home: React.FC<HomePageProps>=({nodes})=>{
 


      
    return(

        <>

            {

                // nodes.map((node:Node,index:Number)=>{
                //     return (<TheCard key={node.id} node={node} />)
                // })

                // nodes.map((node:Node, index:number) => (
                //     <TheCard key={node.id} node={node} />
                //   ))
                
                //   subArr.map((node) => (
                //     <TheCard key={node.id} node={node} />
                //   ))  
            }
        
        
        </>
    )
}

export default Home;