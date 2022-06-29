import { useState , useEffect } from 'react';

const useFetch = (url) => {

    const [ data , setData ] = useState(null)
    const [ isPending , setIsPending ] = useState(true)
    const [error , setError ] = useState(null)

    useEffect(() => {
        // To abort the fetch request after cleaning the hook.
        const abortController = new AbortController();

        setTimeout(() => {
        fetch(url , { signal : abortController.signal })
        .then((response) => {
            if(!response.ok)
            {
                throw Error('Couldn\'t fetch the data from resource...')
            }
             return response.json();
        })
        .then((data) => {
            setData(data)
            setIsPending(false)
        })
        .catch((error) => {
            if(error.name === 'AbortError'){
                console.log("Fetch Aborted");
            }
            else{
                setIsPending(false)
                setError(error.message)
            }
            
        })
        

    },1000);

    return () => abortController.abort();
    },[url]);
 
    return { data , isPending , error }
}


export default useFetch;