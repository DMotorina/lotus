import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {loadingCards, loadingLists} from "../../../../store/actions/boardAction.js"

import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import IconButton from '@mui/material/IconButton'
import CommentIcon from '@mui/icons-material/Comment'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField';

export const Cards = () => {
    const dispatch = useDispatch()

    const loadCards = useSelector((state) => state.board.loadingCards)

    const cards = useSelector((state) => state.board.card)

    const loadLists = useSelector((state) => state.board.loadingLists)

    const lists = useSelector((state) => state.board.lists)

    const [value, setValue] = useState()

    useEffect(() => {
        dispatch(loadingCards())
        dispatch(loadingLists())
    }, [dispatch])

    const handleChange = (event) => {
        setValue(event.target.value)
    }

    console.log("--lists", lists)

    const AddCardsClickHandler = () => {
        alert("Work!")
    }

    if (loadCards) {
        return <h3>Loading...</h3>
    }

    return (
        <>
            <List sx={{ width: '100%', maxWidth: 330, bgcolor: '#ebecf0' }}>
            <TextField
                className='List-textfield'
                maxRows={4}
                value={value}
                onChange={handleChange}
            />
            <Button variant="text" className='button-list' onClick={AddCardsClickHandler} >Add card</Button>
            {cards.map(({slug, name}) => {
            const labelId = `checkbox-list-label-${name}`
            return (
                <List>
                    <ListItem
                        key={slug}
                        name={name}
                        secondaryAction={
                        <IconButton edge="end" aria-label="comments">
                        <CommentIcon />
                        </IconButton>
                    }
                    disablePadding
                    >
                    <ListItemButton role={undefined} dense>
                        <ListItemText id={labelId} primary={name} />
                    </ListItemButton>
                    </ListItem>
                </List>
            )
            })}
            </List>
        </>
    )
}