import { useState } from "react";
import { useHistory } from "react-router";

const Create = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()
    const submitHandler = (event) => {
        setLoading(true)
        event.preventDefault()
        const blog = {title, body, author}
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        })
        .then(() => {
            console.log("Blog Posted")
            setLoading(false)
            history.push('/')
        })
        .catch((err)=> {
            console.log(err.message)
            setLoading(false)
        })
    }
    return (
        <div className="create">
            <h2>Create a new Blog</h2>
            <form onSubmit={submitHandler}>
                <label>Blog title</label>
                <input type="text" required placeholder="Title" value={title} onChange={(event) => setTitle(event.target.value)}/>
                <label>Blog body</label>
                <textarea required value={body} onChange={(event) => setBody(event.target.value)}></textarea>
                <label>Blog author: </label>
                <select value={author} onChange={(event) => setAuthor(event.target.value)}>
                    <option value="Mario">Mario</option>
                    <option value="Yoshi">Yoshi</option>
                </select>
                {!loading && <button>Create</button>}
                {loading && <button disabled>Posting...</button>}
            </form>
        </div>
    );
}
 
export default Create;