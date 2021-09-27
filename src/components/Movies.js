import React, { Component } from 'react'
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Fragment } from 'react';
import MovieItems from './MovieItems';

const Movies_QUERY = gql`
query MoviesQUERY {
    movieList {
        seriesTitle
        star1
        star2
        star3
        star4
        posterLink
        overview
        genre
        imdbRating
        director
        releasedYear
        runtime
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
                            if (loading) return <h4>Loaading Movies...</h4>
                            if (error) console.log(error)
                            console.log(data)

                            return <Fragment>
                                {
                                    data.movieList.map(movieList => (
                                        <MovieItems key={movieList.seriesTitle, movieList.posterLink, movieList.overview, movieList.genre, movieList.imdbRating,
                                            movieList.star1, movieList.star2, movieList.star3, movieList.star4, movieList.director, movieList.releasedYear, movieList.runtime
                                        } movieList={movieList} />
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

export default Movies
