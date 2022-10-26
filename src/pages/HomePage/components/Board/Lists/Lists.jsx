import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from "react-router-dom"

import {Cards} from '../Cards/Cards'
import {CreateCard} from '../Cards/CreateCard.jsx'

import { fetchBoardData } from '../../../../../store/actions/boardAction'

import MUList from '@mui/material/List'
import Typography from '@mui/material/Typography'

export const Lists = () => {
    const { slug } = useParams()

    const dispatch = useDispatch()

    const lists = useSelector((state) => state.board.lists)
    const loadingList = useSelector((state) => state.board.fetchLists)

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
                    <Typography variant="h5" gutterBottom>{name}</Typography>
                    <Cards cards={cards} key={slug}/>
                    <CreateCard />
                </MUList>
            ))}
        </>
    )
}