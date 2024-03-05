import { useEffect, useState } from "react";
const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const result = await response.json();
                setData(result.data);
            } catch (err) {
                console.error("Error fetching data:", err);
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);


    return { data, loading, error };
};
export default useFetch;
