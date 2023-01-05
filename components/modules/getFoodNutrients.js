function getFoodNutrients ( food ) {

    let [data, setData] = useState([]);
    let [error, setError] = useState();

    let url = 'https://trackapi.nutritionix.com/v2/natural/nutrients?'
    let header = new Headers ();
    header.append('Content-Type', 'application/json')
    header.append('x-app-id', 'dc8f2b01')
    header.append('x-app-key', '7ca38ca16b834b43a0242fd71259adb5')

    let jsonQuery = JSON.stringify({'query': food});
    
    let options = {
        method: 'POST',
        headers: header,
        mode: 'cors',
        body: jsonQuery,
    }

    let request = new Request (url, options)

    useEffect(() => {
        fetch(request)
            .then((response) => response.json())
            .then((json) => {
                    setData(json.foods);
                },
                (error) => {
                    setLoading(false);
                    setError(error);
                }
            )
            .finally(() => setLoading(false))    
    }, []);

    console.log("Data is:" + data);
    console.log("Error is:" + error);

    let servingsPerContainer;
    let servingSize;
    let calories;
    let totalFatAmount;
    let totalFatPercentage;
    let saturatedFatAmount ;
    let saturatedFatPercentage;
    let transFatAmount;
    let cholesterolAmount;
    let cholesterolPercentage;
    let sodiumAmount;
    let sodiumPercentage;
    let totalCarbohydrateAmount;
    let totalCarbohydratePercentage;
    let dietaryFiberAmount;
    let dietaryFiberPercentage;
    let totalSugarsAmount;
    let totalSugarsPercentage;
    let proteinAmount;
    let vitaminAAmount;
    let vitaminAPercentage;
    let vitaminCAmount;
    let vitaminCPercentage;
    let calciumAmount;
    let calciumPercentage;
    let ironAmount;
    let ironPercentage;

    servingsPerContainer = data[0].serving_qty;

}

export default getFoodNutrients;