import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from "react-router-dom"

import { fetchBoardData } from '../../../../store/actions/boardAction.js'

import MUList from '@mui/material/List'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import IconButton from '@mui/material/IconButton'
import CommentIcon from '@mui/icons-material/Comment'

export const Lists = () => {
    const { slug } = useParams()

    const lists = useSelector((state) => state.board.lists)
    const loadingList = useSelector((state) => state.board.fetchLists)

    const [value, setValue] = useState("")
    const [open, setOpen] = useState(false)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchBoardData({boardSlug: slug}))
    }, [dispatch])

    const handleClickOpen = () => {
        setOpen(true)
    }
      
    const handleClose = () => {
        setOpen(false)
    }

    const handleChange = (event) => {
      setValue(event.target.value)
    }

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
                    {cards.map(({slug, name}) => (
                        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'transparent' }}>
                            <ListItem
                                key={slug}
                                disableGutters
                                secondaryAction={
                                <IconButton aria-label="comment">
                                    <CommentIcon />
                                </IconButton>
                                }
                            >
                                <ListItemText primary={`${name}`} />
                            </ListItem>
                        </List>
                    ))}
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