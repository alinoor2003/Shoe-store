"use client"
import Card from "@/components/card/card";
import { Womensads } from "../data";




export default function Womens(){
    return  <div id="card-container">
        {
            Womensads.map((ad)=>{
                return <Card meraad={ad}></Card>
            })
        }
    </div>
}