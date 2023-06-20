import { useState, useEffect } from "react";
import axios from "axios";
import { RAPID_API_KEY, RAPID_API_HOST } from "@env";

const rapidApiKey = RAPID_API_KEY;
const rapidApiHost = RAPID_API_HOST;

const useFetch = (endpoint, query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = {
    method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
            'X-RapidAPI-Key': rapidApiKey,
            'X-RapidAPI-Host': rapidApiHost
        },
        params: {...query}
    };

    const fecthData = async () => {
        setIsLoading(true); //loading while data request is being processed

        try {
            //send request using axios and pass in options object defined above
            const response = await axios.request(options);

            setData(response.data.data);
            setIsLoading(false); // no longer loading
        } catch (error) {
            setError(error);
            alert('There is an error');
        } finally {
            setIsLoading(false); //no longer loading as a result or error has been passed
        }
    };

    useEffect(() => {
        fecthData();
    }, []);

    const refetch = () => {
        setIsLoading(true);
        fecthData();
    }
    
    return { data, isLoading, error, refetch };
}

export default useFetch;