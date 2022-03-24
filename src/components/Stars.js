import React, { Component } from 'react'
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Fragment } from 'react';
import StarItems from './StarItems';

const Stars_QUERY = gql`
query StarsQUERY {
    starList (pageNumber:0, pageSize:10) {
        code
        name
      }
}
`;


export class Stars extends Component {

    render() {
        return (
            <div>
                <h1 className="display-4 my-3">Stars</h1>
                <Query query={Stars_QUERY}>
                    {
                        ({ loading, error, data }) => {
                            console.log({data})
                            if (loading) return <h4>Loaading Stars...</h4>
                            if (error) console.log(error)
                            console.log(data)

                            return <Fragment>
                                {
                                    data.starList.map(starList => (
                                        <StarItems key={starList.code, starList.name} starList={starList} />
                                    ))
                                }
                            </Fragment>
                        }
                    }
                </Query>
            </div>
        )
    }

}

export default Stars