import { Box, List, ListItem, ListItemAvatar, ListItemText, Typography , Fab, Stack, Button } from '@mui/material'
import React, { FunctionComponent, useEffect, useState } from 'react'
import {blueGrey} from '@mui/material/colors'
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import { IUser } from '../interfaces/user';
import { deleteUser, getUsers } from '../services/userRepo';

export const User : FunctionComponent = () => {
  const [users, setUsers] = useState<[IUser]|[]>([])

  const fetchUser = async() => {
    let users = await getUsers()
    setUsers(users.data)
  }
  useEffect(() => {
    fetchUser()
  }, [])
  
  const handleDelete = async (id: number) : Promise<any> => {
    try {
      let response = await deleteUser({id})
      if(response) return true
    } catch (error) {
      console.log(error)
      return false
    }
  }
  
  return (
    <React.Fragment>
      <Box sx={{marginTop: 10}}>
        <Typography variant='h4'>List User</Typography>
        <Link to="/user/add">
          <Button variant="contained">Add User</Button>
        </Link>
        <List>
          {
            users?.map((user: IUser) => (
              <ListItem key={user.id} sx={{backgroundColor: blueGrey[50] , borderRadius: '10px', minWidth: '60vw', marginBottom: 2}}
                secondaryAction={
                  <Stack direction={'row'} spacing={2}>
                    <Link to={`/user/${user.id}`}>
                      <Fab size='small' color='primary'>
                        <VisibilityIcon />
                      </Fab>
                    </Link>
                    <Fab size='small' color='error' onClick={() => handleDelete(user.id)}>
                      <DeleteIcon />
                    </Fab>
                  </Stack>
                }
              >
                <ListItemAvatar>
                  <AccountCircleRoundedIcon />
                </ListItemAvatar>
                <ListItemText 
                  primary={user.name}
                  secondary={user.email}
                />
              </ListItem>
            ))
          }
        </List>
      </Box>
    </React.Fragment>
  )
}
