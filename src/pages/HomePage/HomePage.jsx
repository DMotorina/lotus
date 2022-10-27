import './HomePage.sass'

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { loadingBoards } from '../../store/actions/dashboardAction.js'

import { Toolbar } from '../../ui/Toolbar/ToolBar.jsx'
import { BoardCard } from './components/Dashboards/BoardCard/BoardCard.jsx'
import { CreateBoard } from './components/Dashboards/CreateBoard/CreateBoard.jsx'

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
            <div className='home-page-content'>
                {boards.map(({slug, name}) => (
                    <BoardCard 
                        key={slug}
                        name={name}
                        onClick={() => navigate(`/board/${slug}`)}
                    />
                ))}
                <CreateBoard />
            </div>
        </>
    )
}