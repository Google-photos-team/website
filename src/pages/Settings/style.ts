import styled from "styled-components";

const Style = styled.div`
    .settings_form{
        padding: 0 7rem;
        margin-top: 1rem;
        @media (max-width:1200px){
            padding: 0 5rem;
        }
        
        @media (max-width:720px){
            padding: 0;
        }
    }
    
    .save_or_cancel{
        display: flex;
        gap: 0.5rem;
        align-items: center;
        justify-content: flex-end;
        margin: 0  0 1rem 0;
    }
`

export default Style;