import './HomePage.sass'

import { Toolbar } from '../../ui/Toolbar/ToolBar'
import { BoardCards } from './components/BoardCards/BoardCards'

export const HomePage = () => {
    return (
        <>
            <Toolbar />
            <div className='home-page-content'>
                <BoardCards />
            </div>
        </>
    )
}