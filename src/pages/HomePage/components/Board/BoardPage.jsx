import './BoardRoot.sass'

import { useDispatch } from 'react-redux'
import { useEffect } from 'react'

import { fetchBoardData } from '../../../../store/actions/boardAction'

import { Toolbar } from '../../../../ui/Toolbar/ToolBar'
import { Lists} from "./Lists/Lists"
import { CreateList } from './Lists/CreateList.jsx'

import { useParams } from "react-router-dom"

export const BoardPage = () => {
    const { slug } = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchBoardData({boardSlug: slug}))
    }, [dispatch])

    return (
        <>
            <Toolbar />
            <div className='boards-list-content'>
                <Lists />
                <CreateList />
            </div>
        </>
    )
}