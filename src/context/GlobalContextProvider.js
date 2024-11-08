import React,{createContext} from "react";

export const Global = createContext()

const student = {
    name:'Hari Shrestha',
    course:'Python with django'
}

export const GlobalContextProider = (props)=>{

    return (
        <Global.Provider value={student}>
        {props.children}
    </Global.Provider>
    )
    
}