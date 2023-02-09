import React, { createContext, useState } from "react";

const Context = createContext();
const Provider = ( { children } ) => {

    const [ galleryPhoto, setGalleryPhoto ] = useState("");
    const [ loadingModel, setLoadingModel ] = useState(false);
    const [ isPredicting, setIsPredicting ] = useState(false);
    const [ predictedResult, setPredictedResult ] = useState([]);
    const [ foodrecommendation,setFoodRecommendation] = useState([]);
    const [ image, setImage ] = useState();
    const [ help, setHelpToggle ] = useState(false);
    const [ suggestionOverlay, setSuggestionOverlay ] = useState(false);

    const globalContext = {
        galleryPhoto,
        setGalleryPhoto,
        loadingModel,
        setLoadingModel,
        isPredicting,
        setIsPredicting,
        predictedResult, 
        setPredictedResult,
        foodrecommendation,
        setFoodRecommendation,
        image,
        setImage,
        help,
        setHelpToggle,
        suggestionOverlay,
        setSuggestionOverlay,
    }

    return <Context.Provider value={globalContext}>
        {children}
    </Context.Provider>
}

export { Context, Provider };