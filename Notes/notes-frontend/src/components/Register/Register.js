import React from 'react'
import './Register.css'
import { Button , FormGroup, Link, Stack, TextField, Typography} from '@mui/material'
import { flexbox } from '@mui/system'

const Login = () => {
  return (
    <div className='container'>
      <FormGroup className='form' sx={{
        gap:2,
        width:400,
        display:flexbox,
        justifyContent:"center"
        }}>
          <Stack className='form-container' sx={{gap:4}}>

        <Typography variant='primary' sx={{
          fontSize:22,
          fontFamily:'sans-serif'
          
        }}>REGISTER</Typography>
        <FormGroup>
          <TextField sx  id='outlined-basic' label='Name' varient="oulined"/>
        </FormGroup>
        <FormGroup>
          <TextField id='filled-basic' label='Email' varient="filled"/>
        </FormGroup>
        <FormGroup>
          <TextField type='password' id='standard-basic' label='Create Password' varient="standard"/>
        </FormGroup>
        <FormGroup>
          <TextField type='password' id='standard-basic' label='Confirm Password' varient="standard"/>
        </FormGroup>
        <Button variant='contained' >Register</Button>
        </Stack>
        <Typography>Have an account    <Link href='../Login/Login.js' sx={{cursor:"pointer"}}>Login</Link></Typography>
      </FormGroup>

    </div>
  )
}

export default Login