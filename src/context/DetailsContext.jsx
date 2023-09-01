/* ============= Movie Details API ============= */

import { useState, createContext, useEffect } from "react";

const DetailsContext = createContext();

export function DetailsProvider({children}) {
    const [movieId, setMovieId] = useState("");
    const [details, setDetails] = useState([]);
    const API_KEY = `88b693131fd0d28f6ad3a9be6b2e10b8`;
    const API_URL = `https://api.themoviedb.org/3/movie/`;

    
    const updateId = (newId) => {
        setMovieId(newId);
    }

    // fetch movie details
    const getDetails = () => {
        fetch(`${API_URL}${movieId}?api_key=${API_KEY}`)
        .then(response => response.json())
        .then(data => {
            setDetails(data);
        })
    }

    useEffect(() => {
        getDetails()
        console.log(details);
    }, [movieId])

    return (
    <DetailsContext.Provider value={ { details, getDetails, updateId } }>{children}</DetailsContext.Provider>
    )
}

export default DetailsContext;