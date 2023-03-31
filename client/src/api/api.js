import axios from 'axios';

const URL='http://localhost:5000';

export const addUser = async (data)=>{
    try {
        return axios.post(`${URL}/add`,data);
    } catch (error) {
        console.log('Error while calling addUser api',error);
    }
}

export const getUsers = async ()=>{
    try {
        return await axios.get(`${URL}/all`);
    } catch (error) {
        console.log('Error while calling getUsers api',error);
    }
}