import './HomePage.sass'

import { Toolbar } from '../../ui/Toolbar/ToolBar'
import { Boards } from './components/Boards/Boards.jsx'

export const HomePage = () => {
    return (
        <>
            <Toolbar />
            <div className='home-page-content'>
                <Boards />
            </div>
        </>
    )
}