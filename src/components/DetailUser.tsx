import { Box, Card, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams} from 'react-router-dom'
import { IUser } from '../interfaces/user'
import { getDetailUser } from '../services/userRepo'

const DetailUser: React.FC = () => {
  const params = useParams()
  const [user, setUser] = useState<IUser|null>(null)

  const fetchUser = async() => {
    let user = await getDetailUser({id: params.id? parseInt(params?.id) : 0})
    setUser(user.data)
  }
  useEffect(() => {
    fetchUser()
  }, [])
  console.log(user)

  return (
    <Box>
      <Typography variant='h4'>{user?.name}</Typography>
      <Card sx={{textAlign: 'left'}}>
        <Typography variant="body1">Name : {user?.name}</Typography>
        <Typography variant="body1">Username : {user?.username}</Typography>
        <Typography variant="body1">Email : {user?.email}</Typography>
        <Typography variant="body1">Address : {user?.address?.city}</Typography>
        <Typography variant="body1">Phone : {user?.phone}</Typography>
        <Typography variant="body1">Company : {user?.company?.name}</Typography>
      </Card>
    </Box>
  )
  
}

export default DetailUser