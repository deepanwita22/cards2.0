import React, {Component} from 'react';
import Card from './CardUI';
import img1 from "../assets/heartnew.jpg";
import img2 from "../assets/Livernew.jpg";
import img3 from "../assets/KK.jpg";
import img4 from "../assets/Bone1.jpg";
import img5 from "../assets/tree.jpg";
import img6 from "../assets/brain.jpg";




class Cards extends Component{

    render() {
    return(
    <div className="container-fluid d-flex justify-content-center">
      <div className="row">
         <div className="col-md-4">
         
         <Card imgsrc ={img1} title="Doctor" body="ssss"/>
         
        </div>
        <div className="col-md-4">
            <Card imgsrc ={img2} title="Doctor" body="ssss"/>
        </div>
        <div className="col-md-4">
            <Card imgsrc ={img3} title="Doctor"/>
        </div>
        <div className="col-md-4">
            <Card imgsrc ={img4} title="Doctor"/>
        </div>
        <div className="col-md-4">
            <Card imgsrc ={img5} title="Doctor"/>
        </div>
        <div className="col-md-4">
            <Card imgsrc ={img6} title="Doctor"/>
        </div>
      </div>


    </div>

    );
   }
}

export default Cards;