import './style.sass'

import { useState, useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from "react-router-dom"
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

import { fetchBoardData } from './action'
import { createList } from './action'
import { dragToList, dragToCard } from './slice'

import { Toolbar } from '../../shared/ui/Toolbar/ToolBar'
import { Lists } from './components/Lists'
import { CreateList } from './components/CreateList'

import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

export const Board = ({handleAddCard, name}) => {
    const lists = useSelector((state) => state.board.lists)

    const dispatch = useDispatch()

    const { boardSlug } = useParams()

    const [text, setText] = useState("")

    const { error } = useSelector((state) => state.board)

    useEffect(() => {
        dispatch(fetchBoardData({boardSlug}))
    }, [dispatch])

    const handleListTitleOnChange = (newTitle, listSlug) => {
        console.log("Send updated title", newTitle, listSlug)
    }

    const onChangeTextList = (event) => {  
        setText(event.target.value)
    }

    const handleAddList = () => {
        dispatch(createList({name: text, board: boardSlug}))
    }

    const onDragEndList = useCallback((result) => {
        const {type: drugType} = result

        if (drugType === "Lists") {
            dispatch(dragToList({fromIndex: result.source.index, toIndex: result.destination.index}))
        }

        if (drugType === "Cards") {
            dispatch(dragToCard({
                fromIndex: result.source.index, 
                toIndex: result.destination.index, 
                fromList: result.source.droppableId,
                toList: result.destination.droppableId
            }))
        }
    }, [])

    return (
        <>
            <Toolbar />
            <DragDropContext onDragEnd={onDragEndList}>
                <Droppable droppableId="DIlists" type="Lists" direction="horizontal">
                    {(provided) => (
                        <Box 
                            className="ourList" 
                            sx={{flexGrow: 1}}
                            {...provided.droppableProps} 
                            ref={provided.innerRef}
                        >
                            <Grid
                                container
                                direction="row"
                                justifyContent="flex-start"
                                alignItems="flex-start"
                            >
                                {lists.map(({name: listName, slug: listSlug, cards, board: boardSlug}, index) => {
                                    return (
                                        <Draggable 
                                            key={listSlug}
                                            draggableId={listSlug}
                                            index={index}
                                        >
                                            {(provided) => (
                                                <Lists
                                                    key={listSlug}
                                                    className="Board"
                                                    name={listName} 
                                                    slug={listSlug} 
                                                    cards={cards}
                                                    board={boardSlug}
                                                    error={error}
                                                    handleTitleOnChange={handleListTitleOnChange}
                                                    handleAddCard={handleAddCard}
                                                    provided={provided}
                                                    listIndex={index}
                                                />
                                            )}
                                        </Draggable>
                                    )
                                })}
                                {provided.placeholder}
                                <CreateList
                                    name={name}
                                    boardSlug={boardSlug} 
                                    error={error}
                                    onChangeTextList={onChangeTextList} 
                                    handleAddList={handleAddList}
                                />
                            </Grid>
                        </Box>
                    )}
                </Droppable>
            </DragDropContext>
        </>
    )
}