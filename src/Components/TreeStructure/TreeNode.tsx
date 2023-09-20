import React from "react";
import { Node } from "../Models/Node";
import Spinner from 'react-bootstrap/Spinner';
import { TheCard } from "../Home/TheCard";

interface TreeNodeProps{
    node:Node;
}

const TreeNode: React.FC<TreeNodeProps> = ({node}) =>{

return(

    <div>

        {
            node
            ?
            (
                <>
                <p>{node.id}</p>
                <p>{node.label}</p>
                <ul>
                        {node.subordinates.map((el) => (
                            <li key={el.id}>
                                <TreeNode node={el} />
                            </li>
                        ))}
                </ul>

                </>
            )
            :
            (
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
            )
        }

       



    </div>
)


}

export default TreeNode;