import '../style.sass'

import { useState } from 'react'

import { ListForm } from './components/ListForm'

import Button from '@mui/material/Button'

export const CreateList = ({
    text,
    boardSlug, 
    error, 
    onChangeTextList,
    handleAddList
    }) => {

    const [openForm, setOpenForm] = useState(false)

    const handlekOpenCreateForm = () => {
        setOpenForm(true)
    }
      
    const handleCloseCreateForm = () => {
        setOpenForm(false)
    }

    return (
        <>
            {openForm 
                ? (       
                    <ListForm
                        name={text}
                        boardSlug={boardSlug} 
                        error={error} 
                        onChangeTextList={onChangeTextList}
                        handleAddList={handleAddList}
                        handleCloseCreateForm={handleCloseCreateForm}
                    />
                ):(
                    <Button
                        className="AddList__button"  
                        variant="outlined" 
                        onClick={handlekOpenCreateForm}
                    > 
                        Add list 
                    </Button>
                )
            }
        </>
    )
}