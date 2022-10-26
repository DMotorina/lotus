import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {loadingBoards} from "../../../../store/actions/boardAction.js"
import { useNavigate} from 'react-router-dom';

import { BoardCard } from './BoardCard/BoardCard'
import { CreateBoard } from './CreateBoard/CreateBoard.jsx'

export const Boards = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const boards = useSelector((state) => state.board.list)

    const loading = useSelector((state) => state.board.loadingBoard)

    useEffect(() => {
        dispatch(loadingBoards())
    }, [dispatch])

    if (loading) {
        return <h1>Loading...</h1>
    }

    console.log("--boards", boards)


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