import {Table,Button,TableHead,TableBody,TableRow,TableCell,styled} from '@mui/material';
import {getUsers,deleteUser} from '../api/api';
import { useEffect,useState } from 'react';
import { Link } from "react-router-dom";




const StyledTable =styled(Table)`
    width: 50%;
    margin: 50px auto 0 auto;
`;

const THead =styled(TableRow)`
    background-color:black;
    & > th{
    color:#fff;
    font-size:20px;
    }
`
const TRow =styled(TableRow)`
& >td{
    font-size:15px;
}
`


const AllUsers=()=>{
    const [users,setUsers]=useState([]);

    useEffect(()=>{
        getAllusers();
    },[]);
    const getAllusers=async()=>{
       let response =await getUsers();
       setUsers(response.data);
    }

    const deleteuser =async (id)=>{
        await deleteUser(id);
    }

    return(
        <StyledTable>
            <TableHead>
                <THead>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Phone Number</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Hobbies</TableCell>
                    <TableCell>Update</TableCell>
                    <TableCell>Delete</TableCell>
                </THead>
            </TableHead>
            <TableBody>
                {
                    users.map((user)=>(
                        <TRow>
                            <TableCell>{user._id}</TableCell>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.phoneNumber}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.hobbies}</TableCell>
                            <TableCell>
                                <Button variant='contained' component={Link} to={`/edit/${user._id}`} >Edit</Button>
                            </TableCell>
                            <TableCell><Button variant='contained'color='secondary' onClick={()=>{deleteuser(user._id)}} >Delete</Button></TableCell>
                        </TRow>
                    ))
                }
            </TableBody>
        </StyledTable>
    );
}

export default AllUsers;