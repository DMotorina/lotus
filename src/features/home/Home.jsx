import './style.sass'

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { loadingBoards } from './action'

import { Toolbar } from '../../shared/ui/Toolbar/ToolBar'
import { Cards } from './components/Cards'
import { CreateCard } from './components/CreateCard'

import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'

export const Home = () => {
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
            <Box sx={{ flexGrow: 1 }} className="HomePage">
                <Grid
                    className="HomePage__content" 
                    container
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                >
                    {boards.map(({slug, name}) => (
                        <Cards 
                            key={slug}
                            name={name}
                            onClick={() => navigate(`/board/${slug}`)}
                        />
                    ))}
                    <CreateCard />
                </Grid>
            </Box>
        </>
    )
}