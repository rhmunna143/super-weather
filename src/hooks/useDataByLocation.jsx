import axios from "axios";
import { api, apiKey } from "../constants/constants";
import { useEffect, useState } from "react";

const useLocationData = (location = "Kushtia") => {
    const [locationData, setLocationData] = useState([])

    useEffect(() => {
        axios.get(`${api}/direct?q=${location}&limit=5&appid=${apiKey}`)
            .then((response) => {
                setLocationData(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [location]);

    return locationData;
};

export default useLocationData;