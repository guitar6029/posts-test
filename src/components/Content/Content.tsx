import React, { ReactElement } from "react"

type ContentProps = {
    children: React.ReactNode,
    buttons: ReactElement
}


export default function Content({children, buttons}: ContentProps){
    return (
        <div>
        <menu>
        {buttons}
        </menu>
        {children}
        </div>
    )
}