import React, { Component } from 'react';
import { connect } from 'react-redux'
import dataLayout from './../../dataLayout'
import './viewusers.css'

class ViewUsers extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            userData:[],
            update:"0"
         }
         this.loadData()
    }

    loadData = () => {
        console.log('compomentwillMount')
        dataLayout.getUserData()
        .then(res=>{
                console.log(res)
                this.setState({userData:res.data})
                this.props.adduser(res.data)
        })
    }
    


    static getDerivedStateFromProps(nextProps, prevState) {
        console.log(nextProps)
        console.log(nextProps)
        if (prevState.update !== nextProps.update) {
          return {
            userData: nextProps.userData,
            update:nextProps.update
          };
        }else{
            return true
        }
    }

    render() { 
        const { userData } = this.props;
        console.log(this.state.userData)
        console.log(this.props.userData)

        const List = (userData) =>
            <>{userData.data.map((user,i)=>
                                    
                <li key={i} className="col-12 col-md-6 col-lg-3">
                    <div className="cnt-block equal-hight" style={{"height": 349}}>                                   
                        <h3>{user.name}</h3>
                        <p>{user.email}</p>
                        <p>{user.address.city}</p>
                        <p>{user.company.name}</p>                                    
                    </div>
                </li>   
            )}
            </>
        return ( 

            <div className="container">
                <section className="our-webcoderskull padding-lg">
                    <div className="container">
                        <ul className="row">
                            {userData.length > 0 ? (
                                    <List data={userData} />
                            ):(
                                <List data ={this.state.userData} />
                            )}
                             
                                                   
                        </ul>
                    </div>
                </section>
            </div>   
         );
    }
}

const mapStateToProps = (state) =>{
    console.log(state.userData);
    return {
        userData:state.userData,
        update:state.update
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        adduser: (userdata)=> dispatch({type:'PUT_USER',data:userdata})
    }
}
 
export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(ViewUsers)

