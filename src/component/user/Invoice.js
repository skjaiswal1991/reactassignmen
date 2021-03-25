import React, { Component } from 'react';
import './viewusers.css'
import { connect } from 'react-redux'
import dataLayout from './../../dataLayout'
class Invoice extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            InvoiceList:[],
            invoiceUpdate:'0'
         }
         this.loadInvoiceData()
    }

    loadInvoiceData = () =>{
        console.log('compomentwillMount')
        dataLayout.getPostData()
        .then(res=>{
                console.log(res)
                this.props.addInvoice(res.data)
        })
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log(nextProps)

        if (prevState.invoiceUpdate !== nextProps.invoiceUpdate) {
          return {
            InvoiceList: nextProps.InvoiceList,
            invoiceUpdate:nextProps.update
          };
        }else{
            return true
        }
    }

    render() { 

        const {InvoiceList} = this.props;

        const List = (userData) =>
            <>{userData.data.map((user,i)=>
                                    
                <li key={i} className="col-12 col-md-12 col-lg-12">
                    <div className="cnt-block equal-hight" style={{"height": 200}}>                                   
                        <h3>{user.title}</h3>
                        <p>{user.body}</p>
                    </div>
                </li>   
            )}
            </>
        return ( 

            <div className="container">
                <section className="our-webcoderskull padding-lg">
                    <div className="container">
                        <ul className="row">
                        {InvoiceList.length > 0 ? (
                                    <List data={InvoiceList} />
                            ):(
                                <List data ={this.state.InvoiceList} />
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
        InvoiceList:state.InvoiceList,
        invoiceUpdate:state.invoiceUpdate
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        addInvoice: (userdata)=> dispatch({type:'PUT_INVOICE',data:userdata})
    }
}
 
export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Invoice)