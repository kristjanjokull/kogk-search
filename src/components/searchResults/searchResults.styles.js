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

export const InfoContainer = styled.div`
    display: ${props => props.show ? `flex`: `none`};
    flex-direction: column;
    align-items: flex-end;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
`

export const InfoImageContainer = styled.div`
    background: white;
    border-left: 1px solid #f4eeee;
    width: 30%;
    height: 100%;
    padding: 1rem;
    position: relative;
`

export const InfoImage = styled.img`
    width: 100%;
`
export const InfoTitle = styled.h3`
    text-align: center;
`
export const InfoText = styled.p`
    margin-bottom: 1.2rem;
`

export const InfoLink = styled.a`
    text-decoration: none;
    background-color: #f2f2f2;
    padding: 0.5rem 1rem;
    color: #2d2a2a;
    border-radius: 5px;
    &:hover {
        background-color: #f4eeee;
    }
`

export const InfoCloseButton = styled.button`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 0.5rem;
    border: none;
    background-color: #f2f2f2;
    cursor: pointer;
    &:hover {
        background-color: #f4eeee;
    }
`