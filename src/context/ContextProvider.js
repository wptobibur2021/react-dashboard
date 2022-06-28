import React, { createContext, useContext, useState } from 'react'
// Create Context declaration below
const StateContext = createContext();
// Declaration below initialState below
const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
}

export const ContextProvider = ({ children }) => {
    const [activeMenu, setActiveMenu] = useState(true)
    const [checked, setChecked] = useState(initialState)
    const [screenSize, setScreenSize] = useState(undefined)
    const handleClick = (checked) => {
        setChecked({ ...initialState, [checked]: true });
        console.log('Value: ', checked)
    }
    return (
        <StateContext.Provider value={{ activeMenu, setActiveMenu, checked, setChecked, handleClick, screenSize, setScreenSize }}>
            {children}
        </StateContext.Provider>
    )
}
export const useStateContext = () => useContext(StateContext)