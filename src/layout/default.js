import React, { Component } from 'react';
import Header from './../component/common/header'
import Filter from './../component/common/filter'
class DefaultLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <>
            <Header />
            <Filter/>
                {this.props.children}
            </>
            

         );
    }
}
 
export default DefaultLayout;

    