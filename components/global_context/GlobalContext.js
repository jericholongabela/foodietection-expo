import React, { createContext, useState } from "react";

const Context = createContext();
const Provider = ( { children } ) => {

    const [ galleryPhoto, setGalleryPhoto ] = useState("");
    const [ loadingModel, setLoadingModel ] = useState(false);
    const [ isPredicting, setIsPredicting ] = useState(false);

    const globalContext = {
        galleryPhoto,
        setGalleryPhoto,
        loadingModel,
        setLoadingModel,
        isPredicting,
        setIsPredicting,
    }

    return <Context.Provider value={globalContext}>
        {children}
    </Context.Provider>
}

export { Context, Provider };