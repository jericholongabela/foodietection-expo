import { useState, useEffect } from "react";

export default function fetchNutritionFacts ( food ) {

    const [data, setData] = useState();
    // API Endpoints
    let url = 'https://trackapi.nutritionix.com/v2/natural/nutrients?'
    let header = new Headers ();
    header.append('Content-Type', 'application/json')
    header.append('x-app-id', 'dc8f2b01')
    header.append('x-app-key', '7ca38ca16b834b43a0242fd71259adb5')

    let jsonQuery = JSON.stringify({"query": food});

    let request = new Request (url, {
        method: 'POST',
        headers: header,
        mode: 'cors',
        body: jsonQuery,
    })

    useEffect(() => {
        fetch(request)
            .then((response) => response.json())
            .then((json) => {
                setData((json.foods));
                console.log("I am done fetching!")
                },
                (error) => {
                    setLoading(false);
                    setError(error);
                }
            )
            .finally(() => setLoading(false))
        
    }, []);

    return data;
}