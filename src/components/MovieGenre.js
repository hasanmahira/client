import React from 'react'

export default function MovieGenre({ movieGenre: { name } }) {
    return (
        <div>
            {/* <h4>Genres: {name}</h4> */}

            <ul class="list-group">
                <li class="list-group-item d-flex justify-content-between align-items-center">
                Genres: {name}
                    <span class="badge bg-primary rounded-pill">14</span>
                </li>
               
            </ul>
        </div>
    )
}
