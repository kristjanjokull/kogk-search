import React, { useState } from "react";
import { Button, Form, Icon, Input } from './form.styles';
import SearchIcon from "./search-icon.svg";

const Search = () => {
    const [searchValue, setSearchValue] = useState("")
    return (
        <Form onSubmit={ event => {
            event.preventDefault()
            console.log(`You searched for: ${searchValue}`)
        }}>
            <Input 
                type="text" 
                placeholder="Leitarorð"
                value={searchValue}
                onChange={v =>setSearchValue(v.target.value)} 
            />
            <Button type="button">
                <Icon src={SearchIcon} alt="Search" />
            </Button>
        </Form>
    )
}

export default Search
