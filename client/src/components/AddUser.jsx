import { FormGroup,FormControl,InputLabel,Input,Typography,styled,Button } from "@mui/material";
import { useState } from "react";

import { addUser } from "../api/api";

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

const AddUser=()=>{

    const [user,setUser] =useState(defaultValue);

    const onValueChange=(e)=>{
        setUser({...user, [e.target.name]:e.target.value});
        // console.log(user);
    }

    const addUserDetails= async ()=>{
        await addUser(user);
    }
    
    return(
        <Container>
            <Typography variant="h4">Add user</Typography>
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
                <Button variant="contained" onClick={()=>addUserDetails()}>Add User</Button>
            </FormControl>
        </Container>
    );
}

export default AddUser;