import React from 'react';

import './Card.css';

//component that acts like a wrapper around the actual components 
//this is to prevent HTML and style duplication 

//Doing 2 things

//THING 1: 
//here since we  are using a custom components as wrapper, we need to pass all the childrwn components as props. 

//THING 2: 
//now since Card is a custom component so className for styling used in parent container is an attribute passed as props 
function Card(props){

    const classes = "card "+ props.className;
    return(
        <div className={classes}>
            {props.children}
        </div>
    );
}

export default Card;