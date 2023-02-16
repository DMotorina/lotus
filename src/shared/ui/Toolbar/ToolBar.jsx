import { LogoToolbar } from './LogoToolbar'
import { AvatarToolbar } from './AvatarToolbar'

import { logout } from "../../../features/login/actions"

import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import AppBar from '@mui/material/AppBar'
import MUToolbar from '@mui/material/Toolbar'
import Box from '@mui/material/Box'

export const Toolbar = () => {
  const dispatch = useDispatch()
  const {first_name, last_name} = useSelector((state) => state.user.data)
  
  const handleLogout = useCallback(() => {
    dispatch(logout())
  }, [dispatch])

  return (
    <AppBar style={{ height: '55px', background: '#74A9BE' }}>
      <MUToolbar>
        <LogoToolbar />
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} />
        <AvatarToolbar logout={handleLogout} firstName={first_name} lastName={last_name} />
      </MUToolbar>
    </AppBar>
  )
}