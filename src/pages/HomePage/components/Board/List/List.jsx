import { ListTitle } from "./ListTitle"
import { Card } from "./Card/Card"
import { AddCard } from "./AddCard"

import MUList from '@mui/material/List'

export const List = ({
    name,
    error,
    slug: listSlug,
    handleTitleOnChange, 
    cards,  
    handleAddCard
    }) => {

    return (
        <MUList className='lists'>
            <ListTitle value={name} listSlug={listSlug} onChange={handleTitleOnChange} />
            {cards.map(({slug: cardSlug, name: cardName, list: listSlug}) => 
                <Card
                    key={cardSlug}
                    slug={cardSlug} 
                    name={cardName}
                    list={listSlug} 
                />
            )}
            <AddCard 
                listSlug={listSlug}
                name={name}
                error={error}  
                handleAddCard={handleAddCard}/>
        </MUList>
    )
}