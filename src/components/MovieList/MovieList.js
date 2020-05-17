import React, { useState, useEffect } from 'react';
import styles from './movie-list.module.css';
import axios from 'axios';

const API_URL = process.env.REACT_APP_MOVIE_API;
const movie_poster = `http://image.tmdb.org/t/p/w185/`;

export const MovieList = props => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetchGames();
    }, []);

    const fetchGames = async () => {
        const { data } = await axios.get(API_URL);
        console.log(data.results);
        setMovies(data.results);
    }

    const renderMovies = (
        movies.length ? (
            movies.map(movie => (

                <div key={movie.id}>
                    <img src={ `${movie_poster}${movie.poster_path}` } className={styles.poster} />
                </div>
            ))

        ) : (
            <p>Loading ...</p>
        )
    );

    return (
        <div className={ styles.container }>
            { renderMovies }
        </div>
    );

};

