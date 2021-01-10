import React, { useState } from "react";
import { Container, Title } from './App.styles';
import Form from './components/form';
import SearchResults from './components/searchResults';

function App() {
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearcResults] = useState([]);
    const [searchPending, setSearchPending] = useState(false);

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
        const API_KEY = process.env.REACT_APP_API_KEY;
        setSearchPending(true);
        setSearchQuery(q);
        if(q !== "") {
            fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=001361074102112665899%3Ap7mybnrloug&q=${q}`,
            {
                method: "GET",
            })
            .then(res => res.json())
            .then(response => {
                const items = response.items;
                filterResults(items);
                setSearchPending(false);
            })
            .catch(error => {
                console.log('error: ', error);
                setSearchPending(false);
            })
        }
    }
    return (
        <Container>
            <Title>Myndaleit</Title>
            <Form 
                onFormSubmit={r => {
                    perFormSearch(r);
                }
            } />
            <SearchResults 
                searchQuery={searchQuery} 
                searchResults={searchResults} 
                searchPending={searchPending} 
            />
        </Container>
    );
}

export default App;
