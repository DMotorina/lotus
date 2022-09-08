import {BoardCard} from './components/BoardCard/BoardCard'

const boards = [
    { slug: 1, name: 'Board #1' },
    { slug: 2, name: 'Board #2' },
    { slug: 3, name: 'Board #3' }
]

export const BoardCards = () => {
    const handleOnClick = (slug, name) => {
        alert(name)
    }

    return (
        <div>
            {boards.map(({slug, name}) => (
                <BoardCard 
                    key={slug}
                    name={name}
                    onClick={() => handleOnClick(slug, name)}
                />
            ))}
        </div>
    )
}