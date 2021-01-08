import React from "react";
import { Container, Image, ImageContainer } from "./searchResults.styles";

const SearchResults = ({ searchQuery, searchResults }) => {
    // const [searchValue, setSearchValue] = useState("")

    return (
        <Container>
            {searchResults.map((item, indx) => {
                console.log('item:');
                console.log(item);
                const imagePath = item.pagemap.cse_image[0].src;
                return (
                    <ImageContainer>
                        <Image src={imagePath} alt="mynd" key={indx} />
                    </ImageContainer>
                )
            })}
        </Container>
    )
}

export default SearchResults
