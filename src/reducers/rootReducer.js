const initStart = {
    
    userData : [],
    InvoiceList :[],
    update:'',
    invoiceUpdate:''
}

const rootReducer = (state = initStart, action) =>{
    console.log(action);
    switch(action.type){

        case 'PUT_USER':
            return {
                ...state,
                userData: action.data
            }
            break;
        case 'PUT_INVOICE':
            return {
                ...state,
                InvoiceList: action.data
            }
            break;
        case 'FILTER_INVOICE':
                console.log('action')
                console.log(action)
                var data;
                if(action.filter === 'asc'){
                    console.log("ASC Order")
                    data = action.data.sort((a,b)=>{
    
                        let fa = a.title.toLowerCase(),
                            fb = b.title.toLowerCase();
        
                        if (fa < fb) {
                            return -1;
                        }
                        if (fa > fb) {
                            return 1;
                        }
                        return 0;
                    })
                     
                }else if(action.filter === 'desc'){
                    data = action.data.sort((a,b)=>{
    
                        let fa = a.title.toLowerCase(),
                            fb = b.title.toLowerCase();
                        
                        if(fa >fb){
                                return -1;
                        // a should come after b in the sorted order
                        }else if(fa < fb){
                                return 1;
                        // and and b are the same
                        }else{
                                return 0;
                        }
                        
                        
                    })
                    
                }else if(action.filter === 'IDasc'){
                    data = action.data.sort((a,b)=>{
                        let fa = parseInt(a.id)
                        let  fb = parseInt(b.id)
                    return fa-fb 
                })
                    
                }else if(action.filter === 'IDdesc'){
                    data = action.data.sort((a,b)=>{
                        let fa = parseInt(a.id)
                        let  fb = parseInt(b.id)
                    return fb-fa 
                })
                    
                }
                else{
                    console.log("LAST ELSE Order")
                     data = action.data
                     
                }                           
                return {
                    ...state,
                    InvoiceList: data,
                    invoiceUpdate:action.filter
                }
                break;
        case 'FILTER_USER':
            console.log('action')
            console.log(action)
            var data;
            if(action.filter === 'asc'){
                console.log("ASC Order")
                data = action.data.sort((a,b)=>{

                    let fa = a.name.toLowerCase(),
                        fb = b.name.toLowerCase();
    
                    if (fa < fb) {
                        return -1;
                    }
                    if (fa > fb) {
                        return 1;
                    }
                    return 0;
                })
                 
            }else if(action.filter === 'desc'){
                data = action.data.sort((a,b)=>{

                    let fa = a.name.toLowerCase(),
                        fb = b.name.toLowerCase();
                    
                    if(fa >fb){
                            return -1;
                    // a should come after b in the sorted order
                    }else if(fa < fb){
                            return 1;
                    // and and b are the same
                    }else{
                            return 0;
                    }
                    
                    
                })
                
            }else if(action.filter === 'IDasc'){
                data = action.data.sort((a,b)=>{
                    let fa = parseInt(a.id)
                    let  fb = parseInt(b.id)
                return fa-fb 
            })
                
            }else if(action.filter === 'IDdesc'){
                data = action.data.sort((a,b)=>{
                    let fa = parseInt(a.id)
                    let  fb = parseInt(b.id)
                return fb-fa 
            })
                
            }
            else{
                console.log("LAST ELSE Order")
                 data = action.data
                 
            }                           
            return {
                ...state,
                userData: data,
                update:action.filter
            }
            break;
        case 'FILTER_INVOICE':
                return {
                    ...state,
                    InvoiceList: action.data,
                    
                }
                break;
        default:
            return state;

    }
    
}


export default rootReducer;