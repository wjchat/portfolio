import React, {Component} from 'react';

import Content from './content';
import Nav from './nav';

export default class Mobile extends Component{
    render(){
        return<div>
           <Nav />
            <Content />
        </div>
    }
}