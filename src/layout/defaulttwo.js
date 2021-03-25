import React, { Component } from 'react';
import Header from '../component/common/header'
import Filtertwo from './../component/common/filtertwo'
class DefaulttwoLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <>
            <Header />
            <Filtertwo/>
                {this.props.children}
            </>
            

         );
    }
}
 
export default DefaulttwoLayout;

    