import axios from 'axios';

const requestHelper =axios.create({
    baseURL:'https://localhost/4000'
});

export default {
    post:{
        get:()=> requestHelper({
            url:'posts',
            method:'get'
        }),
        create:(data)=> requestHelper({
            url:'posts',
            method:'post',
            data
        })
    },
    comment:{
        get:()=> requestHelper({
            url:'comments',
            method:'get'
        }),
        create:(data)=> requestHelper({
            url:'comments',
            method:'post',
            data
        })
    }
};