import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { getUsers, deleteUserData } from '../service/api'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
const Users = () => {
    const style = {
        marginTop: '1%',
        width: '80%',
        marginLeft: '10%',
    }
    const style1 = {
        backgroundColor: 'red'
    }
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getAllUsers();
    }, []);
    const getAllUsers = async () => {
        const response = await getUsers();
        // console.log(response.data);
        setUsers(response.data);
    }

    const deleteUser = async (id) => {
        await deleteUserData(id);
        getAllUsers();
    }
    return (
        <div className="teest">
            <Table sx={style}>
                <TableHead sx={style1}>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Username</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        users.map(user => (

                            <TableRow key={user.name}>
                                <TableCell>{user.id}</TableCell>
                                <TableCell>{user.name}</TableCell>
                                <TableCell>{user.username}</TableCell>
                                <TableCell>{user.email}</TableCell>
                                <TableCell>
                                    <Link to={'/update/' + user.id}><EditIcon /></Link>
                                    <DeleteIcon color="error" onClick={() => deleteUser(user.id)} />
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </div>
    )
}

export default Users
