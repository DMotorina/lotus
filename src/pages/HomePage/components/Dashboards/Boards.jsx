import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { loadingBoards } from '../../../../store/actions/dashboardAction.js'

import { BoardCard } from './BoardCard/BoardCard.jsx'
import { CreateBoard } from './CreateBoard/CreateBoard.jsx'

export const Boards = () => {
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
            {boards.map(({slug, name}) => (
                <BoardCard 
                    key={slug}
                    name={name}
                    onClick={() => navigate(`/board/${slug}`)}
                />
            ))}
            <CreateBoard />
        </>
    )
}