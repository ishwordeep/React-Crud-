import { Button, FormControl, FormGroup, Input, InputLabel, Typography } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { getUsers, editUser } from '../service/api'
import { useHistory, useParams } from 'react-router-dom'
const initialvalue = {
    name: '',
    email: '',
    username: ''
}
const Update = () => {
    const container = {
        width: '50%',
        margin: '5% 0 0 25%',
    }
    const frmElmt = {
        marginTop: '5%'
    }
    const history = useHistory();
    const { id } = useParams();
    useEffect(() => {
        loadUserData();

    },[]);

    



    const loadUserData = async () => {
        // console.log("LLLLL"+id)
        const res = await getUsers(id);
        setUser(res.data);
    }
    const onValueChange = (e) => {
        console.log(e.target.value);
        setUser({ ...user, [e.target.name]: e.target.value })
        console.log(user)
    }
    const [user, setUser] = useState(initialvalue);
    // const { name, username, email } = user;

    const editUserDetails = async () => {
        await editUser(id,user);
        history.push('/users')
    }


    return (
        <div>
            <FormGroup sx={container}>
                <Typography variant='h4'>Update User</Typography>
                <FormControl sx={frmElmt} >
                    <InputLabel>Name</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} value={user.name} name="name" />
                </FormControl >
                <FormControl sx={frmElmt} >
                    <InputLabel>Username</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} value={user.username}name="username" />
                </FormControl>
                <FormControl sx={frmElmt} >
                    <InputLabel>Email</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} value={user.email}name="email" />
                    
                </FormControl>
                <Button variant="contained" onClick={() => editUserDetails()} sx={frmElmt}>Update USer</Button>
            </FormGroup>
        </div>
    )
}

export default Update

