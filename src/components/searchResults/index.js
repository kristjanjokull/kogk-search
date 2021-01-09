import React, { useState } from "react";
import {
    Container,
    Image,
    ImageContainer,
    InfoCloseButton,
    InfoContainer,
    InfoImage,
    InfoImageContainer,
    InfoLink,
    InfoText,
    InfoTitle,
    SearchContainer
} from "./searchResults.styles";

const SearchResults = ({ searchQuery, searchResults }) => {
    const [openInfoWindow, setOpenInfoWindow] = useState(false);
    const [imageInfo, setImageInfo] = useState(null);

    const updateImageInfobox = (item) => {
        let result = { title: '', image: '', description: '', link: ''};
        result.title = item.title;
        result.image = item.pagemap.cse_thumbnail[0].src;
        result.description = item.snippet;
        result.link = item.link;
        setImageInfo(result);
    }

    return (
        <Container>

            { searchQuery !== "" && searchResults.length >= 0 && (
               <div>
                    <p>Leitin skilaði {searchResults.length} niðurstöðum</p>
                </div>
            )}
            
            {searchResults.length > 0 && (
                <SearchContainer>
                    {searchResults.map((item, indx) => {
                        const imagePath = item.pagemap.cse_image[0].src;
                        return (
                            <ImageContainer 
                                itemsLength={searchResults.length} 
                                onClick={() => {
                                    updateImageInfobox(item);
                                    setOpenInfoWindow(!openInfoWindow);
                                }}
                                key={indx}
                            >
                                <Image src={imagePath} alt="mynd" />
                            </ImageContainer>
                        )
                    })}
                </SearchContainer>
            )}

            {imageInfo && (
                <InfoContainer show={openInfoWindow} onClick={() => setOpenInfoWindow(!openInfoWindow)}>
                    <InfoImageContainer onClick={(e) => e.stopPropagation()}>
                        <InfoImage src={imageInfo.image} alt="mynd"/>
                        <InfoTitle>{imageInfo.title}</InfoTitle>
                        <InfoText>{imageInfo.description}</InfoText>
                        <InfoLink 
                            href={imageInfo.link} 
                            target="_blank" 
                            rel="noreferrer">
                                Lesa grein
                        </InfoLink>
                        <InfoCloseButton onClick={() => setOpenInfoWindow(!openInfoWindow)}>
                            Loka
                        </InfoCloseButton>
                    </InfoImageContainer>
                </InfoContainer>
            )}
        </Container>
    )
}

export default SearchResults
