import axios from 'axios';

const URL='';

export const addUser = async (data)=>{
    try {
        return axios.post(`${URL}/add`,data);
    } catch (error) {
        console.log('Error while calling addUser api',error);
    }
}