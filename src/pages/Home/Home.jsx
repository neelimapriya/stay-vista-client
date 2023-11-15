import Categories from "../../components/Rooms/Categories/Categories";
import Rooms from "../../components/Rooms/Rooms";

const Home = () => {
    return (
        <div>
            <Categories></Categories>
            {/* rooms card */}
            <Rooms></Rooms>
        </div>
    );
};

export default Home;