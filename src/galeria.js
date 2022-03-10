
import React from "react";
import "./kartya.css";
import Kartya from "./kartya";

const kepek = [{
    eleres:"kepek/gtr.jpg",
    cim:"Nissan GT-R35",
    leiras:"Liberty Walk",
    id:0
    },{
    eleres:"kepek/supra.jpg",
    cim:"Toyota Supra MKV",
    leiras:"Liberty Walk",
    id:1
    },{
    eleres:"kepek/lambo.jpg",
    cim:"Lamborghini Aventador",
    leiras:"Liberty Walk",
    id:2
    }]

class Kartyak extends React.Component{
    constructor(){
        super();
         this.state={
            aktKepIndex:0
        }
    }
    aktKep=(id)=>{
        this.setState({
            aktKepIndex:id
        })
        }
        balraKattint=()=>{
            if (kepek[this.state.aktKepIndex].id>0) {
                console.log("balra");
                this.aktKep((kepek[this.state.aktKepIndex].id)-1);
            }
            else{
                console.log("balra újra");
                this.aktKep(2);
            }
        }
        jobbraKattint=()=>{
            if (kepek[this.state.aktKepIndex].id<2) {
                console.log("jobbra");
                    this.aktKep((kepek[this.state.aktKepIndex].id)+1);
            }
            else{
                console.log("jobbra újra");
                this.aktKep(0);  
                }
            }
        render(){
        return(<React.Fragment>
            <div>
                <button className="balra" onClick={this.balraKattint}>Bal</button>
            </div>
            <div className="nagyKep">
                <h1>{kepek[this.state.aktKepIndex].cim}</h1>
                <img src={kepek[this.state.aktKepIndex].eleres}  alt={kepek[this.state.aktKepIndex].cim}></img>
                <p>{kepek[this.state.aktKepIndex].leiras}</p>
            </div>
            <div>
                <button className="jobbra" onClick={this.jobbraKattint}>Jobb</button>
            </div>
            {
                kepek.map((elem, index) =>{
                    return <Kartya key={index} aktKep={this.aktKep} id={elem.id} eleres={elem.eleres} cim={elem.cim} leiras={elem.leiras} />})
            }
           </React.Fragment>);
    };
}

export default Kartyak;