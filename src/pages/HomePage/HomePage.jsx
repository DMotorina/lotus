import './HomePage.sass'

import { Toolbar } from './components/Toolbar/ToolBar'
import { BoardCards } from './components/BoardCards/BoardCards'

export const HomePage = () => {
    return (
        <div>
            <Toolbar />
            <div className='home-page-content'>
                <BoardCards />
            </div>
        </div>
    )
}