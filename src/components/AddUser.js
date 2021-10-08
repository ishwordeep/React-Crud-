import { Button, FormControl, FormGroup, Input, InputLabel, Typography } from '@mui/material'
import React, { useState } from 'react'
import {addUser} from '../service/api'
import {useHistory} from 'react-router-dom'
const initialvalue = {
    name: '',
    email: '',
    username: ''
}
const AddUser = () => {
    const container = {
        width: '50%',
        margin: '5% 0 0 25%',
    }
    const frmElmt = {
        marginTop: '5%'
    }


    const history=useHistory();

    const onValueChange= (e) => {
        console.log(e.target.value);
        setuser({...user,[e.target.name]:e.target.value})
        console.log(user)
    }
    const [user, setuser] = useState(initialvalue);
    const { name, username, email } = user;

    const addUserDetails=async() => {
        await addUser(user);
        history.push('./users')
    }


    return (
        <div>
            <FormGroup sx={container}>
                <Typography variant='h4'>Add User</Typography>
                <FormControl sx={frmElmt} >
                    <InputLabel>Name</InputLabel>
                    <Input onChange={(e)=>onValueChange(e)} name="name"/>
                </FormControl >
                <FormControl sx={frmElmt} >
                    <InputLabel>Username</InputLabel>
                    <Input onChange={(e)=>onValueChange(e)} name="username"/>
                </FormControl>
                <FormControl sx={frmElmt} >
                    <InputLabel>Email</InputLabel>
                    <Input onChange={(e)=>onValueChange(e)} name="email"/>
                </FormControl>
                <Button variant="contained" onClick={()=>addUserDetails()} sx={frmElmt}>Add USer</Button>
            </FormGroup>
        </div>
    )
}

export default AddUser
