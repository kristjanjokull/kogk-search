import React, { useState } from "react";
import { Container, Title } from './App.styles';
import Form from './components/form';
import SearchResults from './components/searchResults';

function App() {
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearcResults] = useState([]);

    const filterResults = (results) => {
        const filteredResults = [];
        results.forEach(r => {
            const pageMap = r.pagemap;
            if(pageMap && pageMap.cse_image && pageMap.cse_image.length > 0) {
                filteredResults.push(r);
            }
        });
        setSearcResults(filteredResults);
    }

    const perFormSearch = (q) => {
        setSearcResults([]);
        setSearchQuery(q);
        if(q !== "") {
            fetch(`https://www.googleapis.com/customsearch/v1?key=AIzaSyAYUizvEhkAK5RyJWYPlALE2MqvdOhYTP8&cx=001361074102112665899%3Ap7mybnrloug&q=${q}`,
            {
                method: "GET",
            })
            .then(res => res.json())
            .then(response => {
                console.log('RESPONSE:');
                console.log(response);
                const items = response.items;
                filterResults(items);
            })
            .catch(error => console.log('error: ', error))
        }
    }
    return (
        <Container>
            <Title>Myndaleit</Title>
            <Form 
                onFormSubmit={r => {
                    console.log('onFormSubmit r: ', r);
                    perFormSearch(r);
                }
            } />
            <SearchResults searchQuery={searchQuery} searchResults={searchResults} />
        </Container>
    );
}

export default App;
