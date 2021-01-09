import styled from "styled-components"

export const Container = styled.div`
`

export const SearchContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 1rem;
`

export const ImageContainer = styled.div`
    
    ${({ itemsLength }) => itemsLength < 5 && `
        grid-column: span 2;
        grid-row: span 2;
    `}

    ${({ itemsLength }) => itemsLength > 5 && `
         &:nth-child(1) {
            grid-column: span 4;
            grid-row: span 2;
        }

        &:nth-child(2), &::nth-child(3) {
            grid-column: span 2;
        }

        &:nth-child(4), &::nth-child(5) {
            grid-column: span 3;
        }
    `}
`

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    cursor: pointer;
`
