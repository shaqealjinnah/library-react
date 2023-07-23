import Discounted from "../components/Discounted";
import Explore from "../components/Explore";
import Features from "../components/Features";
import Highlights from "../components/Highlights";
import Landing from "../components/Landing";

function Home() {
    return (
        <>
            <Landing />
            <Highlights />
            <Features />
            <Discounted />
            <Explore />
        </>
    )
}

export default Home;