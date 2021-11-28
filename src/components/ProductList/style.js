import styled from "styled-components"

export const Content = styled.div`
    background-color: #f5f5f5;
    display: flex;
    display: ${(props) => (props.show ?  "flex" : "none")};
    flex-direction: column;
    width: 515px;
    height: 100%;
    margin-right: 30px;
`