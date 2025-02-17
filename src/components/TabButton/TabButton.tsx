import React from "react";

type TabButtonTypes = {
    title : string,
    children: React.ReactNode,
    tabClicked: (title:string) => void,
    classStr: string
}

export default function TabButton({title, children, tabClicked, classStr}: TabButtonTypes){
 return (
    <div className={`tab-button ${classStr}`}>
        <button onClick={() => tabClicked(title)}>{title}</button>
        {children}
    </div>
 )
}