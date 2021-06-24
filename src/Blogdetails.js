import {useHistory, useParams} from 'react-router-dom'
import useFetch from './useFetch'

const Blogdetails = () => {
    const {id} = useParams()
    const history = useHistory()
    const {data, isLoading,  error} = useFetch('http://localhost:8000/blogs/' + id)
    const deleteHandler = () => {
        fetch('http://localhost:8000/blogs/' + id, {
            method: 'DELETE'
        })
        .then(() => {
            history.push('/')
        })
    }
    return (
        <div className="blog-details">
            {error && <div>{error}</div>}
            {isLoading && <div>Loading...</div>}
            {data && (
                <article>
                    <h1>Blog-{id} </h1>
                    <h2>{data.title}</h2>
                    <p>{data.body}</p>
                    <p>Written by <i>{data.author}</i></p>
                    <button onClick={deleteHandler}>Delete</button>
                </article>
            )}
        </div>
    );
}
 
export default Blogdetails;