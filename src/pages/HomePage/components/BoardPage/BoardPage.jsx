import './BoardPage.sass'

import { Toolbar } from '../Toolbar/ToolBar'
import { BoardList } from './BoardList'

import { useParams } from "react-router-dom"

export const BoardPage = () => {
    const params = useParams()

    document.title = `${params.slug}`

    return (
        <>
            <Toolbar />
            <BoardList />
        </>
    )
}