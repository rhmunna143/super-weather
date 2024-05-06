import axios from "axios";
import { api, apiKey } from "../constants/constants";
import { useEffect, useState } from "react";

const useLocationData = (location = "Kushtia") => {
    const [locationData, setLocationData] = useState([])

    useEffect(() => {
        axios.get(`${api}/direct?q=${location}&limit=5&appid=${apiKey}`)
            .then((response) => {
                if (response.data && response.data.length > 0) {
                    setLocationData(response.data);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }, [location]);

    return {
        location: locationData,
        lat: locationData[0]?.lat,
        lon: locationData[0]?.lon
    };
};

export default useLocationData;