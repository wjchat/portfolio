import React, {Component} from 'react';

import style from '../css/main.css';
import text from '../text';
import redbullvid from '../redbull.mp4';

import desktoplogin from '../images/desktoplogin.png';
import home from '../images/home.png';
import managerides from '../images/managerides.png';
import manageridesclosed from '../images/manageridesclosed.png';
import mobilelogin from '../images/mobilelogin.png';
import info from '../images/info.png';

class RedBull extends Component{
    componentDidMount(){
        this.refs.video.play();
    }
    render(){
        return(
            <div className = {style.content}>
                <h1>Red Bull</h1>
                <p>{text.RedBull}</p>
                <video ref = "video" autoplay loop src= {redbullvid}></video>
            </div>
        )
    }
}
function Opener(props){
    return(
        <div className = {style.content}>
            <h1>Portfolio</h1>
            <p>{text.Opener}</p>
            <p className = {style.right}>-Will Chatterson</p>
        </div>
    )
}
function Papuga(props){
    return(
        <div className = {style.content}>
            <h1>Papuga</h1>
            <p>{text.Papuga}</p>
            <ul>
                <li><img src = {desktoplogin} alt=""/></li>
                <li><img src = {home} alt=""/></li>
                <li><img src = {info} alt=""/></li>
                <li><img src = {manageridesclosed} alt=""/></li>
                <li><img src = {managerides} alt=""/></li>
            </ul>
        </div>
    )
}

export default class ContentContainer extends Component{
    render(){
        return(
            <div className = {style.contentcontainer}>
                {(this.props.current === 'home') && <Opener />}
                {(this.props.current === 'redbull') && <RedBull />}
                {(this.props.current === 'papuga') && <Papuga />}
            </div>
        )
    }
}