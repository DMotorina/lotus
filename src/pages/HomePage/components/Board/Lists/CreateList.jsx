import '../BoardRoot.sass'

import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {createLists} from '../../../../../store/actions/boardAction.js'
import { FormCreateList } from './FormCreateList'

import Button from '@mui/material/Button'

export const CreateList = () => {
  const dispatch = useDispatch()

  const { error } = useSelector((state) => state.board)

  const [open, setOpen] = useState(false)
  const [text, setText] = useState("") 

  const onChangeTextList = (event) => {  
    setText(event.target.value)
  }

  const handleClickOpen = () => {
    setOpen(true)
  }
  
  const handleClose = () => {
    setOpen(false)
  }

  const handleAddList = (name) => {
    dispatch(createLists({name: text}))
  }

  return (
      <>
          <Button variant="outlined" className='button-add' onClick={handleClickOpen}> Add list </Button>
          <FormCreateList
              open={open}
              handleClose={handleClose}
              error={error} 
              onChangeTextList={onChangeTextList}
              handleAddList={handleAddList} 
          />
      </>
  )
}