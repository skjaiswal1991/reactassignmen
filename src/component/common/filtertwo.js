import React, { Component } from 'react';
import { connect } from 'react-redux'
import dataLayout from '../../dataLayout'
class Filter extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            title:'All Invoice',
            userData:[]
         }

         
    }
    componentWillMount(){
        console.log('compomentwillMount')
        dataLayout.getPostData()
        .then(res=>{
                console.log(res)
               this.setState({userData:res.data})
        })
    }

    clickHendler = (e) =>{
        console.log('onchange')
        let sorting = e.target.value;
        console.log(sorting)
        this.props.addFilter(this.state.userData,sorting)
    }
    render() { 
        return ( 

            
                <div className="container" style={{background:'lightgray'}}>
                <div className="row d-flex align-items-center">
                    <div className="col-md-6 d-md-block d-none">
                    <p>{this.state.title}</p>
                    </div>
                    <div className="col-md-6">
                        <div className="d-flex justify-content-md-end justify-content-between">
                            <select className="form-control" onChange={this.clickHendler}>                               

                                    <option value="">Please Select Filter</option>
                                    <option value="asc">title(Asc)</option>
                                    <option value="desc">Title(Desc)</option>
                                    <option value="IDasc">ID(Asc)</option>
                                    <option value="IDdesc">ID(Desc)</option>
                            </select>
                        </div>
                    </div>
                </div>
                </div>
            
         );
    }
}
const mapStateToProps = (state) =>{
    console.log(state.userData);
    return {
        userData:state.userData
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        addFilter: (userdata,filter)=> dispatch({type:'FILTER_INVOICE',data:userdata,filter})
    }
}
 
export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Filter)