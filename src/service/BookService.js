import axios from 'axios';

const API =axios.create({
    baseURL:'http://localhost:8080/Library/v1/library/management/books/'
})

export default {
    books:{
         getAll: ()=> API({
            url:'allbooks',
            method:'get'
        }),

        create:(data)=>API({
            url:'newbook',
            method:'post',
            data
        })
    }
}

