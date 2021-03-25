export const getUser = (users) =>({

               type:'GET_USER', 
                users
            })
export const getInvoice = () =>({

    type:'GET_INVOICE'
    })
export const filterUser = (filter) =>({

    type:'FILTER_USER',filter
    })
export const filterInvoice = (filter) =>({

    type:'FILTER_INVOICE',filter
    })



