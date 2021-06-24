import Bloglist from './Bloglist'
import useFetch from './useFetch'

const Home = () => {

    const {data: blogs, isLoading, error} = useFetch('http://localhost:8000/blogs');
    return (
        <div className="home">
            <h2>Homepage</h2>
            {error && <div>{error}</div>}
            {isLoading && <div>Loading...</div>}
            {blogs && <Bloglist items={blogs}/>}
        </div>
    );
}
 
export default Home;
