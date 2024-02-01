import './stylesOfList.css'

import React from "react";

export default function Column({width, children}) {
    const myClass = ['column', width].join(' ')
    console.log(myClass);
    return <div className={myClass}>{children}</div>
}