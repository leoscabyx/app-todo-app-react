import React from "react";

import { TodoContext } from '../TodoContext'

function TodoSearch() {
    const { search, setSearch } = React.useContext(TodoContext)

    const handleChangeInput = (event) => {
        console.log(event.target.value)
        setSearch(event.target.value)
    }

    return (
        <input type="text" placeholder="Ingresar algo...." value={search} onChange={handleChangeInput} />
    )
}

export { TodoSearch };