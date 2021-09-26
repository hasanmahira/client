import React, { Component } from 'react'
import gql from 'graphql-tag';
import {Query} from 'react-apollo';

const UserInterests_QUERY = gql `
query UserInterestsQUERY {
    testField
}
`;

export class UserInterests extends Component {
    render() {
        return (
            <div>
                <h1 className="display-4 my-3">Interests</h1>
                <Query query={UserInterests_QUERY}>
                    {
                        ({ loading, error, data }) => {
                            if(loading) return <h4>Loaading...</h4>
                            if (error) console.log(error)
                            console.log(data)

                            return<h1>Test</h1>
                        }
                    }
                </Query>
            </div>
        )
    }
}

export default UserInterests
