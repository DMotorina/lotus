import '../BoardPage.sass'

import { useState, useRef, useEffect, forwardRef } from "react"

import { ListEditForm } from "./components/ListEditForm"
import { Card } from "./Card/Card"
import { AddCard } from "./components/AddCard"

import MUList from '@mui/material/List'
import { Droppable, Draggable } from 'react-beautiful-dnd'

export const List = forwardRef((
    {
        provided,
        name,
        slug: listSlug,
        cards,  
        error,
        handleTitleOnChange, 
        handleAddCard
    },
    ref
    ) => {
    
    const [ourCard, updateOurCard] = useState({Card})

    const [openTitle, setOpenTitle] = useState(false)

    const handleOpenTitle = () => {
        setOpenTitle(true)
    }

    return (
        <>
            <MUList 
                className= "List" 
                draggable={true}
                ref={provided.innerRef}
                {...provided.draggableProps} 
                {...provided.dragHandleProps}
            >
                <Droppable droppableId={listSlug} type="Cards" className="ourCard">
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
        </>
    )
})