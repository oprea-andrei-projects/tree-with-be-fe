import React, { useState } from "react";
import Card from 'react-bootstrap/Card';
import { Node } from "../Models/Node";


interface CardProps{

    node: Node,

}

export const TheCard: React.FC<CardProps>=({node})=>{


    return(
        <>

            <Card style={{ width: '19rem', border: "1px solid black",marginTop:"10px" }}>
                <Card.Body style={{ marginLeft: 'auto'}}>
                    
                    <Card.Title>{node.id}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{node.label}</Card.Subtitle>
                    <Card.Text>
                    {node.descriere}
                    </Card.Text>
                    <Card.Link href="#">Employee CV</Card.Link>
                   
                </Card.Body>
            </Card>
        
        
        </>
    )
}

