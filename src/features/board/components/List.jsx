import '../BoardPage.sass'

import { useState, forwardRef, useCallback } from "react"
import { useDispatch } from 'react-redux'

// import { dragToCard } from '../boardSlice'

import { ListEditForm } from "./list/ListEditForm"
import { Card } from "./list/Card"
import { AddCard } from "./list/AddCard"

import MUList from '@mui/material/List'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

export const List = forwardRef((
    {
        provided,
        name,
        slug: listSlug,
        cards,  
        error,
        handleTitleOnChange, 
        handleAddCard,
        listIndex
    },
    ref
    ) => {
    
    const dispatch = useDispatch()
    
    const [openTitle, setOpenTitle] = useState(false)

    const handleOpenTitle = () => {
        setOpenTitle(true)
    }

    const onDragEndCard = useCallback((result) => {
        console.log("--result", result)
        // dispatch(dragToCard({
        //     fromIndex: result.source.index, 
        //     toIndex: result.destination.index, 
        //     fromList: result.source.droppableId,
        //     toList: result.destination.droppableId,
        // }))
    })

    return (
        <MUList 
            className= "List" 
            draggable={true}
            ref={provided.innerRef}
            {...provided.draggableProps} 
            {...provided.dragHandleProps}
        >
                <Droppable droppableId={String(listIndex)} type="Cards" className="ourCard">
                    {(provided) => (
                        <div
                            className="ourCard" 
                            {...provided.droppableProps} 
                            ref={provided.innerRef}
                        >
                            <ListEditForm 
                                name={name}
                                listSlug={listSlug} 
                                openTitle={openTitle}
                                onChange={handleTitleOnChange}
                                handleOpenTitle={handleOpenTitle}
                            />
                                                    
                            {cards.map(({name: cardName, slug: cardSlug, list: listSlug}, index) => {
                                return (
                                    <Draggable 
                                        key={cardSlug}
                                        draggableId={cardSlug}
                                        index={index}
                                    >
                                        {(cardProvided) => (
                                            <Card
                                                key={cardSlug}
                                                name={cardName}
                                                slug={cardSlug} 
                                                list={listSlug}
                                                className="Card"
                                                provided={cardProvided}
                                            />
                                        )}
                                    </Draggable>
                                )
                            })}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            <AddCard 
                listSlug={listSlug}
                name={name}
                error={error}  
                handleAddCard={handleAddCard}
            />
        </MUList>
    )
})