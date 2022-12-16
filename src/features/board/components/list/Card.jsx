import '../../BoardPage.sass'

import { useState } from 'react'
import { Droppable, Draggable } from 'react-beautiful-dnd'

import { CardEditForm } from './card/CardEditForm'
import { CardEditModal } from './card/CardEditModal'

import MUList from '@mui/material/List'

export const Card = ({name, listSlug, provided = null}) => {
    const [openForm, setOpenForm] = useState(false)
    const [openModal, setOpenModal] = useState(false)

    const handleOpenModal = () => {
        setOpenModal(true)
    }

    const handleCloseModal = () => {
        setOpenModal(false)
    }

    const handleOpenForm = () => {
        setOpenForm(true)
    }

    const handleCloseForm = () => {
        setOpenForm(false)
    }

    const handleCardTitleOnChange = (newTitle, listSlug) => {
        console.log("Send updated title", newTitle, listSlug)
    }

    return (
        <>  
            < MUList
                className="Card"                
                list={listSlug}
                ref={provided.innerRef}
                {...provided.draggableProps} 
                {...provided.dragHandleProps}
            >
                <CardEditForm
                    name={name}
                    openForm={openForm}
                    handleOpenForm={handleOpenForm}
                    handleOpenModal={handleOpenModal}
                    handleCloseForm={handleCloseForm}
                />
            </MUList>

            <CardEditModal 
                name={name}
                listSlug={listSlug}
                openModal={openModal}
                handleCloseModal={handleCloseModal} 
                onChange={handleCardTitleOnChange}
            />
        </>
    )
}