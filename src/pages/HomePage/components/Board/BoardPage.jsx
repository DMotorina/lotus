import './BoardPage.sass'

import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from "react-router-dom"

import { fetchBoardData } from '../../../../store/actions/boardAction.js'

import { Toolbar } from '../../../../ui/Toolbar/ToolBar.jsx'
import { Lists } from "./Lists.jsx"

import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

export const BoardPage = () => {
    const [open, setOpen] = useState(false)

    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(fetchBoardData({boardSlug: slug}))
    }, [dispatch])

    const { slug } = useParams()  

    const handleClickOpen = () => {
      setOpen(true)
    }
    
    const handleClose = () => {
      setOpen(false)
    }

    return (
        <>
            <Toolbar />
            <div className='board-content'>
                <Lists />
                {open 
                    ? (       
                        <Box component="span" sx={{ p: 2, border: '1px dashed grey' }}>
                        <TextField label="Enter list title" variant="outlined" />
                        <Button>Create</Button>
                        <Button onClick={handleClose}> Cancel </Button>      
                        </Box> 
                    ):(
                        <Button 
                            variant="outlined" 
                            className='button-add' 
                            onClick={handleClickOpen}
                        > 
                        Add list 
                        </Button>
                )}
            </div>
        </>
    )
}