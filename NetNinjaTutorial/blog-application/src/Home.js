
import BlogList from './BlogList';
import useFetch from './useFetch';
const Home = () => {
    const { data: blogs, isPending, error }= useFetch('http://localhost:8000/blogs');

    return ( 
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div> Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All blogs" />}
            {/* blog가 존재할 때만 작용하게하는 방법 이게 없으면 현재 초기 값으로  blog가 null 이기 때문 */}
        </div>
     );
}
 
export default Home;