import React from 'react'
import './Login.css'
import Register from '../Register/Register'
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
          
        }}>Login</Typography>
        <FormGroup>
          <TextField id='filled-basic' label='Email' varient="filled"/>
        </FormGroup>
        <FormGroup>
          <TextField type='password' id='standard-basic' label='Create Password' varient="standard"/>
        </FormGroup>
        <Button variant='contained' >Login</Button>
        </Stack>
        <Typography>Don't have an account    <Link href='/home/alex/Desktop/Mern/Notes/notes-frontend/src/components/Resgister/Resgister.js' sx={{cursor:"pointer"}}>Register</Link></Typography>
      </FormGroup>
    </div>
  )
}

export default Login