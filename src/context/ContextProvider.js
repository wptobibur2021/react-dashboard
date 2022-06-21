import React, { createContext, useContext, useState } from 'react'
// Create Context declaration below
const StateContext = createContext()
// Declaration below initialState below
const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false
}

export const ContextProvider = ({ children }) => {
    return (
        <StateContext.Provider value={{ text: 'text' }}>
            {children}
        </StateContext.Provider>
    )
}