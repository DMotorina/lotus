import '../HomePage.sass'

import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { createBoards } from "../dashboardAction"

import { FormCreateBoard } from './FormCreateBoard'

import Button from '@mui/material/Button'

export const CreateBoard = () => {
  const navigate = useNavigate()

  const dispatch = useDispatch()

  const { error } = useSelector((state) => state.dashboard)

  const [open, setOpen] = useState(false)
  const [text, setText] = useState("") 

  const onChangeText = (event) => {  
    setText(event.target.value)
  }

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleAdd = (name) => {
    dispatch(createBoards({name: text}))
      .then(data => {
        if(!data.error) {
          navigate(`board/${data.payload.slug}`)
        }
      })
  }

  return (
    <>
      <Button
        className="CreateBoard__button--create" 
        variant="outlined" 
        onClick={handleClickOpen}
      > 
        Create board 
      </Button>
      <FormCreateBoard 
        error={error} 
        open={open} 
        onChangeText={onChangeText} 
        handleAdd={handleAdd}
        handleClose={handleClose} 
      />
    </>
  )
}
