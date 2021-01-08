import React, { useState } from "react"

const Search = () => {
    const [searchValue, setSearchValue] = useState("")
    return (
        <form onSubmit={ event => {
            event.preventDefault()
            console.log(`You searched for: ${searchValue}`)
        }}>
            <input 
                type="text" 
                placeholder="Leitarorð"
                value={searchValue}
                onChange={v =>setSearchValue(v.target.value)} 
            />
        </form>
    )
}

export default Search
