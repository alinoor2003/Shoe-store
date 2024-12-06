
import Card from "@/components/card/card";
import { mensads } from "../data";




export default function Mens(){
    return <div>
    <div id="card-container">
    {
    mensads.map((ad)=>{
return <Card meraad={ad}></Card>
    })
}
</div>
</div>
}