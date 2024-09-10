import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin: 40px 0;
    @media (max-width: 830px){
        grid-template-columns: 1fr;
    }
   
`