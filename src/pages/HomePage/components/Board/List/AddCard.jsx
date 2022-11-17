import { useState } from "react"
import { useDispatch } from 'react-redux'

import { createCard } from '../../../../../store/actions/boardAction.js'

import { CreateCard } from "../CreateCard.jsx"

import Button from '@mui/material/Button'

export const AddCard = ({name, error, listSlug}) => {
    const dispatch = useDispatch()

    const [open, setOpen] = useState(false)
    const [text, setText] = useState("") 
        
    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }


    const onChangeTextCard = (event) => {  
        setText(event.target.value)
    }

    const handleAddCard = () => {
        dispatch(createCard({name: text, list: listSlug}))
    }

    return (
        <>
            {open 
                ? (       
                    <CreateCard
                        name={text}
                        listSlug={listSlug}
                        error={error} 
                        handleClose={handleClose}
                        onChangeTextCard={onChangeTextCard}
                        handleAddCard={handleAddCard}
                    />
                ):(
                    <Button 
                        variant="outlined" 
                        className='addCard' 
                        onClick={handleClickOpen}
                    > 
                    + Add card 
                    </Button>
                )
            }
        </>
    )
}