import React, { Component } from 'react'
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const Movies_QUERY = gql`
query MoviesQUERY {
    movieList {
        seriesTitle
        star1
      }
}
`;


export class Movies extends Component {

    render() {
        return (
            <div>
                <h1 className="display-4 my-3">Movies</h1>
                <Query query={Movies_QUERY}>
                    {
                        ({ loading, error, data }) => {
                            if (loading) return <h4>Loaading...</h4>
                            if (error) console.log(error)
                            console.log(data)

                            return( <h1>Test</h1>
                            
                                )
                        }
                    }
                </Query>
                {/* <div class="card border-primary mb-3" style="max-width: 20rem;">
                    <div class="card-header">Header</div>
                    <div class="card-body">
                        <h4 class="card-title">Primary card title</h4>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div> */}
            </div>
        )
    }
}

export default Movies
