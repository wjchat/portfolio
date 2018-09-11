import React, {Component} from 'react';

import closenav from '../svg/closenav.svg';
import opennav from '../svg/opennav.svg';
import wc from '../svg/WC.svg';

const style = {
    position: 'fixed',
    top: '0',
    width: '100%',
    display: 'flex',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    boxSizing: 'border-box',
    padding: '35px  20px',
}
export default class Nav extends Component{
    render(){
        return(
            <nav style = {style}>
                <img src={wc} alt="logo"/>
                <img src={(this.props.open) ? closenav : opennav} alt="toggle navigation"/>
            </nav>
        )
    }
}