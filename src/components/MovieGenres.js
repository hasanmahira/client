import React, { Component } from 'react'
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import MovieGenre from './MovieGenre'
import { Fragment } from 'react';

const MoviesGenres_QUERY = gql`
query MovieGenresQUERY {
    movieGenreList {
        name
      }      
}
`;


export class MovieGenres extends Component {

    render() {
        return (
            <Fragment>
                <h1 className="display-4 my-3">Movie Genres</h1>
                <Query query={MoviesGenres_QUERY}>
                    {
                        ({ loading, error, data }) => {
                            if (loading) return <h4>Loaading...</h4>
                            if (error) console.log(error)
                            console.log(data)

                            return <Fragment>
                                {
                                    data.movieGenreList.map(movieGenre => (
                                        <MovieGenre key={movieGenre.name}  movieGenre={movieGenre} />
                                    ))
                                }
                            </Fragment>
                        }
                    }
                </Query>
            </Fragment>
        )
    }
}

export default MovieGenres
