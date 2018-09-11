import React, {Component} from 'react';

//import breakpoints from '../breakpoints';
import text from '../text';

const style = {
    position: 'relative',
    display: 'block',
    marginTop: '40%', 
}

function RedBull(props){
    return(
        <div>
            <h1>Red Bull</h1>
            <p>{text.RedBull}</p>
        </div>
    )
}

export default class ContentContainer extends Component{
    render(){
        return(
            <div style = {style}>
                <RedBull />
            </div>
        )
    }
}