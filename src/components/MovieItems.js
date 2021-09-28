import React, { useState } from 'react'
// import MovieDetail from './MovieDetail'


export default function Movies({ movieList: { seriesTitle, posterLink, star1, star2, star3, star4, overview, genre, imdbRating, director, releasedYear, runtime } }) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <div class="card-list">
                    <div class="card col-sm-3 col-lg-3" role="group">
                        <div class="card-header">
                            <div class="row">
                                <div class="col-lg-11">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" aria-hidden="true" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Follow" style={{ margin: 'right' }}>+ </button>
                                    <img src={posterLink} alt="IMBD" style={{ width: 100, display: 'block', margin: 'auto' }}></img>
                                    <h7 class="card-subtitle">Rating: {imdbRating}</h7>
                                    <h5 class="modal-title">{seriesTitle} </h5>
                                </div>
                                <div class="col-lg-1">
                                </div>
                            </div>
                            <button type="button" onClick={handleShow}>
                                Detail
                            </button>
                        </div>

                        {show &&
                            <div id="source-modal" class="modal fade show" tabIndex="-1" style={{ display: 'block' }} aria-modal="true" role="dialog">
                                <div class="modal-dialog modal-lg">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <div class="row">
                                                <div class="col-lg-11">
                                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" aria-hidden="true" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Follow" style={{ margin: 'right' }}>+ </button>
                                                    <img src={posterLink} alt="IMBD" style={{ width: 100, display: 'block', margin: 'auto' }}></img>
                                                    <h6 class="card-subtitle">Rating: {imdbRating}</h6>
                                                    <h4 class="modal-title">{seriesTitle} </h4>
                                                </div>
                                                <div class="col-lg-1">
                                                </div>
                                            </div>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-hidden="true" onClick={handleClose}>X</button>
                                        </div>
                                        <div class="modal-body">
                                            <div class="card-body">

                                                <h5 class="card-title">Genre: {genre}</h5>
                                            </div>
                                            <div class="card-body">
                                                <p class="card-text">Overview: {overview}</p>
                                            </div>
                                            <ul class="list-group list-group-flush"> <h5 class="card-header">Stars</h5>
                                                <li class="list-group-item">{star1}</li>
                                                <li class="list-group-item">{star2}</li>
                                                <li class="list-group-item">{star3}</li>
                                                <li class="list-group-item">{star4}</li>
                                            </ul>
                                            <div class="card-body">
                                                <h6 class="card-text">Director: {director}</h6>
                                                <h6 class="card-text">Runtime: {runtime}</h6>
                                            </div>
                                            <div class="card-footer ">
                                                Release Year: {releasedYear}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }

                    </div>
                    <br></br>
                </div>
        </div>
    )
}
