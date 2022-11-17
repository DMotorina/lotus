import './BoardPage.sass'

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from "react-router-dom"

import { fetchBoardData } from '../../../../store/actions/boardAction.js'

import { Toolbar } from '../../../../ui/Toolbar/ToolBar.jsx'
import { List } from './List/List'
import { AddList } from './AddList'

import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'

export const BoardPage = ({handleAddCard, handleAddList, name}) => {
    const { boardSlug } = useParams()

    const dispatch = useDispatch()

    const lists = useSelector((state) => state.board.lists)

    const { error } = useSelector((state) => state.board)

    useEffect(() => {
        dispatch(fetchBoardData({boardSlug}))
    }, [dispatch])

    const handleListTitleOnChange = (newTitle, listSlug) => {
        console.log("Send updated title", newTitle, listSlug)
    }

    return (
        <>
            <Toolbar />
            <Box sx={{ flexGrow: 1 }} className='board-content'>
            <Grid 
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="flex-start"
                className='lists-content'
            >
                    {lists.map(({slug: listSlug, name: listName, cards, board: boardSlug}) => 
                        <List
                            key={listSlug}
                            slug={listSlug} 
                            name={listName} 
                            cards={cards}
                            error={error} 
                            board={boardSlug} 
                            handleTitleOnChange={handleListTitleOnChange}
                            handleAddCard={handleAddCard}
                        />
                    )}
                    <AddList
                        boardSlug={boardSlug} 
                        name={name}
                        error={error} 
                        handleAddList={handleAddList}
                    />
                </Grid>
            </Box>
        </>
    )
}