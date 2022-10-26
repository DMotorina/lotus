import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from "react-router-dom"

import {Cards} from '../Cards/Cards'

import { fetchBoardData } from '../../../../../store/actions/boardAction'

import MUList from '@mui/material/List'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

export const Lists = () => {
    const { slug } = useParams()

    const dispatch = useDispatch()

    const lists = useSelector((state) => state.board.lists)
    const loadingList = useSelector((state) => state.board.fetchLists)

    const [value, setValue] = useState("")
    const [open, setOpen] = useState(false)

    const handleClickOpen = () => {
        setOpen(true)
    }
      
    const handleClose = () => {
        setOpen(false)
    }
  

    const handleChange = (event) => {
      setValue(event.target.value)
    }

    useEffect(() => {
        dispatch(fetchBoardData({boardSlug: slug}))
    }, [dispatch])

    if (loadingList) {
        return <h3>Loading...</h3>
    }

    return (
        <>  
            {lists.map(({slug, name, cards}) => (
                <MUList sx={{ width: '100%', maxWidth: 330, bgcolor: '#ebecf0' }}>                    
                    <TextField
                        sx={{width: '100%'}}
                        maxRows={4}
                        value={name}
                        onChange={handleChange}
                    />
                    <Cards cards={cards} key={slug}/>
                    
                    {open 
                        ? (       
                            <Box component="span" sx={{ p: 1, border: '1px dashed grey' }}>
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
                            Add card 
                            </Button>
                    )}
                
                </MUList>
            ))}
        </>
    )
}