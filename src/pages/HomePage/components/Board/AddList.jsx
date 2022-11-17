import './BoardPage.sass'

import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { createList } from '../../../../store/actions/boardAction'

import { CreateList } from './List/CreateList'

import Button from '@mui/material/Button'

export const AddList = ({error, boardSlug}) => {
    const dispatch = useDispatch()

    const [text, setText] = useState("")
    const [open, setOpen] = useState(false)

    const handleClickOpen = () => {
        setOpen(true)
    }
      
    const handleClose = () => {
        setOpen(false)
    }

    const onChangeTextList = (event) => {  
        setText(event.target.value)
    }

    const handleAddList = () => {
        dispatch(createList({name: text, board: boardSlug}))
    }

    return (
        <>
            {open 
                ? (       
                    <CreateList
                        name={text}
                        error={error} 
                        boardSlug={boardSlug} 
                        handleAddList={handleAddList}
                        handleClose={handleClose}
                        onChangeTextList={onChangeTextList}
                    />
                ):(
                    <Button 
                        variant="outlined" 
                        className='addList' 
                        onClick={handleClickOpen}
                    > 
                    Add list 
                    </Button>
                )
            }
        </>
    )
}