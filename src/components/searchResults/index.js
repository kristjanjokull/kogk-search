import React from "react";
import { Container, Image, ImageContainer, SearchContainer } from "./searchResults.styles";

const SearchResults = ({ searchQuery, searchResults }) => {
    // const [searchValue, setSearchValue] = useState("")

    return (
        <Container>
            { searchQuery !== "" && searchResults.length > 0 && (
               <div>
                    <p>Leitin skilaði {searchResults.length} niðurstöðum</p>
                </div>
            )}
            
            {searchResults.length > 0 && (
                <SearchContainer>
                    {searchResults.map((item, indx) => {
                        const imagePath = item.pagemap.cse_image[0].src;
                        return (
                            <ImageContainer itemsLength={searchResults.length}>
                                <Image src={imagePath} alt="mynd" key={indx} />
                            </ImageContainer>
                        )
                    })}
                </SearchContainer>
            )}
        </Container>
    )
}

export default SearchResults
