import Card from "@/components/card/card";
import { kidsads } from "../data";




export default function Kids(){
    return <div id="card-container">
        {
            kidsads.map((ad)=>{
                return <Card meraad={ad}></Card>
            })
        }
    </div>
}