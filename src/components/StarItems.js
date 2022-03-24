import React from 'react'

export default function StarItems({ starList: { code, name } }) {
    return (
        <div>
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Code</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="table-light">
                        <th scope="row">{name}</th>
                        <td>{code}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}