import { render } from "react-dom"
import React from "react";
import "./kartya.css";

class Kartya extends React.Component{
    constructor(props){
        super(props);
      }
      kattintaskezelo=()=>{
          this.props.aktKep(this.props.id)
      }
        render(){
        return(<div className="kartya" onClick={this.kattintaskezelo}>
            <h1>{this.props.cim}</h1>
            <img src={this.props.eleres}  alt={this.props.cim}></img>
            <p>{this.props.leiras}</p>
            </div>);
    };
}

export default Kartya;