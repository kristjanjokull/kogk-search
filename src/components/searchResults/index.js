import React from "react";
import { Container, Image, ImageContainer } from "./searchResults.styles";

const SearchResults = ({ searchQuery, searchResults }) => {
    // const [searchValue, setSearchValue] = useState("")

    return (
        <Container>
            <p>Here comes the search results</p>
            <p>Huga huga: {searchQuery}</p>

            {searchResults.map((item, indx) => {
                console.log('item:');
                console.log(item);
                const imagePath = item.pagemap.cse_image[0].src;
                return (
                    <ImageContainer key={indx}>
                        <Image src={imagePath} alt="mynd" />
                    </ImageContainer>
                )
            })}
        </Container>
    )
}

export default SearchResults
