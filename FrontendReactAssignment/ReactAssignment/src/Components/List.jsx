import React from 'react'
import Card from './Card'

function List() {
    const users = [
        {
            Name: 'Chewin Grerasitsirt',
            Job: 'CS Student',
            Hobby: 'Playing games'
        },
        {
            Name: 'Chewa Grerasitsirt',
            Job: 'CS Student',
            Hobby: 'Reading'
        },
        {
            Name: 'Chewie Grerasitsirt',
            Job: 'CS Student',
            Hobby: 'Sleeping'
        },
        {
            Name: 'Chewit Grerasitsirt',
            Job: 'CS Student',
            Hobby: 'Do nothing'
        }
    ]

    return (
        <div className="List">
            {users.map((item) => {
                return <Card newuser={item} />
            })}
        </div>
    )
}

export default List