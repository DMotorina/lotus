import '../../BoardPage.sass'

import { useState } from 'react'

import { ModalCard } from './Modal/ModalCard'
import { EditTextCard } from './EditTextCard'

import MUList from '@mui/material/List'
import MUListItem from '@mui/material/ListItem'
import MUListItemText from '@mui/material/ListItemText'
import Button from '@mui/material/Button'
import EditIcon from '@mui/icons-material/Edit'
import { TextField } from '@mui/material'
import { styled } from '@mui/material/styles'

const CardNameTextField = styled((props) => (
    
    <TextField InputProps={{ disableUnderline: true }} {...props} />
  
    ))(({ theme }) => ({
    '& .MuiFilledInput-root': {
        border: '1px solid transparent',
        fontSize: '18px',
        overflow: 'hidden',
        backgroundColor: theme.palette.mode === 'light' ? 'transparent' : '#2b2b2b',
        transition: theme.transitions.create([
            'border-color',
            'background-color',
            'box-shadow',
        ]),
    '&:hover': {
        backgroundColor: 'transparent'
    },
    '&.Mui-focused': {
        backgroundColor: 'transparent'
    },
    },
}))

export const Card = ({name, listSlug}) => {
    const [openModal, setOpenModal] = useState(false)
    const [openEdit, setOpenEdit] = useState(false);

    const handleClickOpenModal = () => {
        setOpenModal(true)
    }

    const handleCloseModal = () => {
        setOpenModal(false)
    }

    const handleClickOpenEdit = () => {
        setOpenEdit(true)
    }

    const handleCloseEdit = () => {
        setOpenEdit(false)
    }

    const handleCardTitleOnChange = (newTitle, listSlug) => {
        console.log("Send updated title", newTitle, listSlug)
    }

    // const handleEditOnChange = (newTitle, listSlug) => {
    //     console.log("Send updated title", newTitle, listSlug)
    // }

    return (
        <>  
            <MUList className='cards' list={listSlug}>
                <MUListItem
                    disableGutters
                >
                    <CardNameTextField
                        id="cardName-input"
                        variant="filled"
                        value={name}
                        style={{ marginLeft: 5 }}
                    />
                </MUListItem>
                <Button onClick={handleClickOpenModal}>
                    <EditIcon />
                </Button>
            </MUList>

            <ModalCard 
                openModal={openModal}
                name={name}
                listSlug={listSlug}
                handleCloseModal={handleCloseModal}
                onChange={handleCardTitleOnChange} 
            />
        </>
    )
}