import { useEffect } from "react";

export default function useFetch(url, method, body = null) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);


    useEffect(() => {
        const fetchData  = async () => {
            try {
                const options = {
                    method: method,
                    headers: {
                        "Content-Type": "Application/json"
                    },
                    body: body ? JSON.stringify(body) : null
                }

                const response  = await fetch(url, options);
                const data  = await response.json();

                if (response.status !== 200) {
                    throw new Error(data.message || "Error in fetching data");
                }

                setData(data);
                setError(null);
            } catch(e){
                setError(error.message || "Error in fetching data");
            } 
        }

        fetchData();
      
    }, [url, method, body]);

    return { data, error };
}
