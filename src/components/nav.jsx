import React, {Component} from 'react';

import closenav from '../svg/closenav.svg';
import opennav from '../svg/opennav.svg';
import wc from '../svg/WC.svg';

const style = {
    backgroundColor: 'white',
    position: 'fixed',
    zIndex: 100,
    top: '0',
    width: '100%',
    display: 'flex',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    boxSizing: 'border-box',
    padding: '35px  20px',
}
const pointer = {
    cursor: 'pointer',
}
export default class Nav extends Component{
    render(){
        return(
            <nav style = {style}>
                <img style = {pointer} onClick = {this.props.onClick} id = 'home' src={wc} alt="logo"/>
                <img style = {pointer} onClick = {this.props.toggleNav} src={(this.props.open) ? closenav : opennav} alt="toggle navigation"/>
            </nav>
        )
    }
}