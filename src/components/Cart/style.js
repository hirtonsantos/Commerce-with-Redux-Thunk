import styled from "styled-components"

export const Container = styled.div`
    background: #f5f5f5;
    margin-top: 16px;
    width: 100%;
    height: 100px;
    display: flex;
    margin-bottom: 10px;
    border-radius: 8px;
    color: black;
    justify-content: space-between;
    align-items: center;
    img {
        object-fit: contain;
        width: 15%;
    }
    h2 {
        font-size: 18px;
        max-width: 100px;
    }
    Button {
        margin-right: 10px;
    }
    :hover {
        border: 1px solid black;
        cursor: pointer;
    }
`