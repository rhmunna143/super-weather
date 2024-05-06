import axios from "axios";
import { useEffect, useState } from "react";
import { api, apiKey, corsAnywhereUrl } from "../constants/constants";
import useLocationData from "./useDataByLocation";

const useWeatherDataByGeo = () => {
    const [weatherData, setWeatherData] = useState([])
    const geoLocation = useLocationData("London");

    console.log(geoLocation, weatherData);

    useEffect(() => {
        axios.get(`${corsAnywhereUrl}${api}/onecall?lat=${geoLocation?.lat}&lon=${geoLocation?.lon}&exclude=current,hourly,daily&appid=${apiKey}`, {
            withCredentials: false,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET",
                "Access-Control-Allow-Headers": "Content-Type, Authorization",
                "Content-Type": "application/json",
                "Authorization": "Bearer " + apiKey
            }
        })
            .then((response) => {
                setWeatherData(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [geoLocation.lat, geoLocation.lon])

    return weatherData;
}

export default useWeatherDataByGeo;