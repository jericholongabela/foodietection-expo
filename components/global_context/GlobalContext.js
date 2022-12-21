import React, { createContext, useState } from "react";

const Context = createContext();
const Provider = ( { children } ) => {

    const [ galleryPhoto, setGalleryPhoto ] = useState("");

    const globalContext = {
        galleryPhoto,
        setGalleryPhoto,
    }

    return <Context.Provider value={globalContext}>
        {children}
    </Context.Provider>
}

export { Context, Provider };