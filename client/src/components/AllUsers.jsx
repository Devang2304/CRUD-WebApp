import {Table,TableHead,TableBody,TableRow,TableCell} from '@mui/material';
import {getUsers} from '../api/api';
import { useEffect,useState } from 'react';


const AllUsers=()=>{
    const [users,setUsers]=useState([]);

    useEffect(()=>{
        getAllusers();
    },[]);
    const getAllusers=async()=>{
       let response =await getUsers();
       setUsers(response.data);
    }
    return(
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Phone Number</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Hobbies</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    users.map((user)=>(
                        <TableRow>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.phoneNumber}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.hobbies}</TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    );
}

export default AllUsers;