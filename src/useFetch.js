import {useState, useEffect} from 'react'
const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isLoading, setLoad] = useState(true)
    const [error, setError] = useState(null)
    useEffect(() => {
        const abortController = new AbortController()
        fetch(url, {signal: abortController.signal})
        .then(res => {
            if(!res.ok){
                throw Error('Could not fetch data from the server')
            }
            return res.json()
        })
        .then(data => {
            setData(data)
            setLoad(false)
            setError(null)
        })
        .catch(err => {
            if(err.name === 'AbortError'){
                console.log('Fetch Aborted')
            }
            else{
                setError(err.message)
                setLoad(false)
            }
        })
        return () => abortController.abort()
    }, [url])
    
    return {data, isLoading, error, setData};
}
 
export default useFetch;