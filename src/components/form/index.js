import React, { useState } from "react";
import { Button, Form, Icon, Input } from './form.styles';
import SearchIcon from "./search-icon.svg";

const SearchForm = ({ onFormSubmit }) => {
    const [searchValue, setSearchValue] = useState("");
    return (
        <Form onSubmit={ event => {
            event.preventDefault();
            onFormSubmit(searchValue);
        }}>
            <Input 
                type="text" 
                placeholder="Leitarorð"
                value={searchValue}
                onChange={v => setSearchValue(v.target.value)} 
            />
            <Button type="submit">
                <Icon src={SearchIcon} alt="Search" />
            </Button>
        </Form>
    )
}

export default SearchForm
