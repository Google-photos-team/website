import styled from "styled-components";

const Style = styled.div`
    margin: 2rem 0;
    padding: 1.5rem 1rem 1rem;
    border-radius: 8px;
    border: 1px solid ${props => props.theme.colors.primary.semiBlack};

    .buttons{
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
        gap: 1rem;
        margin: 1.2rem 0 0;
    }
    
`

export default Style;