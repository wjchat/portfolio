import React, {Component} from 'react';

import { Link } from 'react-router-dom';
import PDF from '../Resume.pdf';
import styles from '../css/main.css';

function Underline(props){
    return(
        <div className = {styles.bottomBar}></div>
    )
}
export default class NavOptions extends Component{
    render(){
        return(
            <ul className = {styles.navList}>
                <li onClick = {this.props.onClick} id = 'redbull'>Red Bull {this.props.current === 'redbull' && <Underline />}</li>      
                <br/>      
                <li onClick = {this.props.onClick} id = 'papuga'>Papuga {this.props.current === 'papuga' && <Underline />}</li>  
                <br/>          
                <li><a target = '_blank' href = {PDF}>Resume</a></li>
            </ul>
        )
    }
}