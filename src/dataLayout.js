import axios from 'axios';

class dataLayout{

    

    getUserData = () =>
    {

        return new Promise ((resolve,reject)=>{

            axios.get('https://jsonplaceholder.typicode.com/users')
            .then((res)=> resolve(res))
            .catch(error=>reject(error))
        })
    }

    getPostData = () =>
    {

        return new Promise ((resolve,reject)=>{

            axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((res)=> resolve(res))
            .catch(error=>reject(error))
        })
    }




}

export default new dataLayout()