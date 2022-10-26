import Button from '@mui/material/Button'

export const CreateCard = () => {
    const AddCardsClickHandler = () => {
        alert("Wwork!")

    }

    return (
        <>                
            <Button variant="text" className='button-list' onClick={AddCardsClickHandler}>Add card</Button>
        </>
    )
}