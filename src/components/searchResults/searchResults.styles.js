import styled from "styled-components"

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 1rem;
`

export const ImageContainer = styled.div`

`

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`
