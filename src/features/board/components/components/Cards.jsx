import '../../style.sass'

import { useState } from 'react'
import { Droppable, Draggable } from 'react-beautiful-dnd'

import { CardEditForm } from './components/CardEditForm'
import { CardEditModal } from './components/CardEditModal'

import MUList from '@mui/material/List'

export const Cards = ({name, listSlug, provided = null}) => {
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