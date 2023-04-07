import { FormGroup,FormControl,InputLabel,Input,Typography,styled,Button } from "@mui/material";
import { useState,useEffect } from "react";
import { useNavigate,useParams } from 'react-router-dom';

import { addUser, getUser } from "../api/api";

const Container=styled(FormGroup)`
width: 50%;
margin:5% auto 0 auto;
& > div {
    margin-top: 20px
}
`
const defaultValue={
    name: '',
    phoneNumber: '',
    email: '',
    hobbies: ''
}

const EditUser=()=>{
    const navigate = useNavigate();
    const {id} =useParams();
    const [user,setUser] =useState(defaultValue);

    useEffect(()=>{
        loadUserDetails();
    },[]);

    const loadUserDetails =async ()=>{
        const response = await getUser(id);
    }

    const onValueChange=(e)=>{
        setUser({...user, [e.target.name]:e.target.value});
        // console.log(user);
    }

    const editUserDetails= async ()=>{
        await addUser(user);
        navigate('/all')
    }
    
    return(
        <Container>
            <Typography variant="h4">Edit User</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="name"/>
            </FormControl>
            <FormControl>
                <InputLabel>Phone Number</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="phoneNumber"/>
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="email" />
            </FormControl>
            <FormControl>
                <InputLabel>Hobbies</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="hobbies" />
            </FormControl>
            <FormControl>
                <Button variant="contained" onClick={()=>editUserDetails()}>Edit User</Button>
            </FormControl>
        </Container>
    );
}

export default EditUser;