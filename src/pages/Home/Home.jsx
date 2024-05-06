/* eslint-disable no-unused-vars */
import useLocationData from "../../hooks/useDataByLocation";
import useWeatherDataByGeo from "../../hooks/useWeatherDataByGeo";
import "./Home.css";

const Home = () => {
    const weatherData = useWeatherDataByGeo();
    
    return (
        <div className={`bg-homeBackground min-h-screen home-bg`}>
            Home
        </div>
    );
};

export default Home;