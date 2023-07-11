import React from "react";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


import "./Cards.css";

function Cards(props){

    return (
        <>
        
        <div className="Box">
<Card className= "container-image " style={{ width: '18rem' }}>
      <Card.Img  src={props.imgsrc} />
      <Card.Body>
        <Card.Title className="h1">{props.title}</Card.Title>
        <Card.Text className="h2">
        Tiger is sent on a relatively easy and safe mission to Dublin, Ireland to observe a scientist of Indian origin who is suspected of sharing his research findings with the Pakistan defence establishment. Tiger attempts to meet the scientist but is not successful. He tries to befriend the scientist’s part time home caretaker, Zoya (Katrina Kaif). As Tiger begins to get closer to Zoya... he begins to discover his human side.
        </Card.Text>
        
        <a href={props.link} target="_blank">
        <button className="btn">   Watch Now     </button>

        </a>
      </Card.Body>
    </Card>
    </div>
        </>
    )
}

export default Cards;