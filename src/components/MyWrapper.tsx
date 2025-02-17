import React from "react"

type MyWrapperProps = {
    children: React.ReactNode;
}

export default function MyWrapper({children}: MyWrapperProps ) {
    return (
        <div>
            {children}
        </div>
    )
}