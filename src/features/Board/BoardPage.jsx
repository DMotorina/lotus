import './BoardPage.sass'

import { useState, useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from "react-router-dom"
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

import { fetchBoardData } from '../store/actions/boardAction'
import { createList } from '../store/actions/boardAction'
import { runDasha } from '../store/slices/boardSlice'

import { Toolbar } from '../../ui/Toolbar/ToolBar'
import { List } from './List/List'
import { AddList } from './components/AddList'

import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

export const BoardPage = ({handleAddCard, name}) => {
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

    const onDragEnd = useCallback((result) => {
        const {type: drugType} = result
        if (drugType !== "Lists") return;

        const fromIndex = result.source.index
        const toIndex = result.destination.index

        // console.log(fromIndex, toIndex)
        dispatch(runDasha({fromIndex, toIndex}))
    }, [])
    

    return (
        <>
            <Toolbar />
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="DIlists" type="Lists" direction="horizontal">
                    {(provided, snapshot) => (
                        <Box 
                            className="ourList" 
                            sx={{flexGrow: 1, backgroundColor: snapshot.isDragging ? 'pink' : null}}
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
                                                <List
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
                                                />
                                            )}
                                        </Draggable>
                                    )
                                })}
                                {provided.placeholder}
                                <AddList
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