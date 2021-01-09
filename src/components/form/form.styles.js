import styled from "styled-components"

export const Form = styled.form`
    position: relative;
    display: block;
    margin-bottom: 2rem;

`

export const Icon = styled.img`
    margin: 0;
    width: 20px;
    height: 20px;
`

export const Input = styled.input`
    width: 100%;
    height: 1.5rem;
    padding: 1.2rem;
    border: 1px solid rgb(226, 230, 233);
    border-radius: 2px;
    font-size: 0.8rem;
    box-sizing: border-box;
    &:focus {
        outline-width: 0;
}`

export const Button = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    position: absolute;
    top: 10px;
    right: 10px;
`
