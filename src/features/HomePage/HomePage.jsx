import './HomePage.sass'

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { loadingBoards } from '../store/actions/dashboardAction'

import { Toolbar } from '../../ui/Toolbar/ToolBar'
import { BoardCard } from './components/BoardCard'
import { CreateBoard } from './components/CreateBoard'

import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'

export const HomePage = () => {
    const navigate = useNavigate()

    const boards = useSelector((state) => state.dashboard.list)
    const loading = useSelector((state) => state.dashboard.loadingBoard)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadingBoards())
    }, [dispatch])

    if (loading) {
        return <h1>Loading...</h1>
    }

    return (
        <>
            <Toolbar />
            <Box sx={{ flexGrow: 1 }} className='HomePage'>
                <Grid
                    className='HomePage__content' 
                    container
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                >
                    {boards.map(({slug, name}) => (
                        <BoardCard 
                            key={slug}
                            name={name}
                            onClick={() => navigate(`/board/${slug}`)}
                        />
                    ))}
                    <CreateBoard />
                </Grid>
            </Box>
        </>
    )
}