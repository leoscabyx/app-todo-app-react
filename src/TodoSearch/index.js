
function TodoSearch({ search, setSearch}) {

    const handleChangeInput = (event) => {
        console.log(event.target.value)
        setSearch(event.target.value)
    }

    return (
        <input type="text" placeholder="Ingresar algo...." value={search} onChange={handleChangeInput} />
    )
}

export { TodoSearch };