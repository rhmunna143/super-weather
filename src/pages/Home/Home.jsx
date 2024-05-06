import useLocationData from "../../hooks/useDataByLocation";
import "./Home.css";

const Home = () => {
    const locationData = useLocationData();

    return (
        <div className={`bg-summer min-h-screen home-bg`}>
            Home
        </div>
    );
};

export default Home;