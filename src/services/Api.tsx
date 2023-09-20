

import {Node} from "../Components/Models/Node";

import HttpResponse from "../Components/Models/HttpResponse";


export default class Api{


    api<U,T>(path: string, method: string, body:U, token: string): Promise<HttpResponse<T>>{

        const url="http://localhost:8081/api/v1/nodes" + path;
        const options: RequestInit = {
            method,
            headers:{
                "Content-Type":"application/json;charset=utf-8",
                Autentification: `Bearer${token}`,
                method: "no-cors",
            },

            body:body==null ? null : JSON.stringify(body),

        };
        return fetch(url, options);   

    }

    async getAllNodes(): Promise<Node[]>{

        let data = await this.api<null,Node[]>("/getAllNodes","GET",null,"");
        let nodes = await data.json();
        return nodes;
        
    }



}