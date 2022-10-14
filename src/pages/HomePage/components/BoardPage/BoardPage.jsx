import './BoardPage.sass'

import { Toolbar } from '../../../../ui/Toolbar/ToolBar'
import { Cards } from './Cards'
import { AddList } from './AddList'

import { useParams } from "react-router-dom"

export const BoardPage = () => {
    const params = useParams()

    document.title = `${params.slug}`

    return (
        <>
            <Toolbar />
            <div className='boards-list-content'>
                <Cards />
                <AddList />
            </div>
        </>
    )
}