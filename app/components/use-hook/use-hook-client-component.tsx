"use client"

import React, { use } from 'react'

const UseHookClientComponent: React.FC<{ data: any }> = ({ data }) => {
    // we pass the promise to use.
    const response = use(data)
    // and we get data.
    return <pre>{JSON.stringify(response, undefined, 2)}</pre>
}
export default UseHookClientComponent;