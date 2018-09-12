import React, {Component} from 'react';

import Content from './content';
import Nav from './nav';
import NavOptions from './navoptions';

export default class Mobile extends Component{
    constructor(props){
        super(props);
        this.state = {
            current: 'papuga',
            showNav: false,
        }
    }
    changePage = e =>{
        this.setState({
            current: e.target.id,
            showNav: false,
        })
    window.scrollTo(0, 0);
    }
    toggleNav = () =>{
        if(this.state.showNav === false){
            window.scrollTo(0,0);
        }
        this.setState({
            showNav: !this.state.showNav,
        })
    }
    render(){
        return<div>
           <Nav toggleNav = {this.toggleNav} onClick = {this.changePage} open = {this.state.showNav} />
           {this.state.showNav === false ?
           <Content current = {this.state.current} />:
           <NavOptions onClick = {this.changePage} current = {this.state.current} />
            }
        </div>
    }
}