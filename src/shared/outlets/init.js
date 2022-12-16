import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { checkAuth } from '../../features/login/userActions'

export const InitOutlet = () => {
  const dispatch = useDispatch()
  useEffect(() => { dispatch(checkAuth()) }, [dispatch])
  const isAuthChecked = useSelector((state) => state.user.isAuthChecked)

  return isAuthChecked ? <Outlet /> : null
}