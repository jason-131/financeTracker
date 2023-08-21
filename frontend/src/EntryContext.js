import {useState, createContext} from 'react'

export const EntryContext = createContext();

export const EntryProvider = (props) =>{
    const[entry, setEntries] = useState({"data":[]});
    
    return (
        <EntryContext.Provider value = {[entry, setEntries]}>
            {props.children}
        </EntryContext.Provider>
    )
}