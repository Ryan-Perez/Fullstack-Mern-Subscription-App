import React, { createContext, useState } from "react"

interface User {
    data: {
        id: string,
        email: string
    } | null,
    error: string | null,
    loading: boolean

}

const UserContext = createContext<
    [User, React.Dispatch<React.SetStateAction<User>>]
>([
    {data: null,
    loading: true,
    error: null},
    () => {}
    ])