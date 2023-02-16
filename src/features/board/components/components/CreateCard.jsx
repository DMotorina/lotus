import '../../style.sass'

import { useState } from "react"
import { useDispatch } from 'react-redux'

import { createCard } from '../../action'

import { CardForm } from "./components/CardForm"

import Button from '@mui/material/Button'

export const CreateCard = ({error, listSlug}) => {
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
                    <CardForm
                        name={text}
                        listSlug={listSlug}
                        error={error} 
                        handleClose={handleClose}
                        onChangeTextCard={onChangeTextCard}
                        handleAddCard={handleAddCard}
                    />
                ):(
                    <Button
                        className="AddCard__button"  
                        variant="outlined" 
                        onClick={handleClickOpen}
                    > 
                        + Add card 
                    </Button>
                )
            }
        </>
    )
}