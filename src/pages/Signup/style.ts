import styled from "styled-components";

const Style = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
    
    .login_left_image{
        height: 100dvh;
        position: absolute;
        inset-inline-end: 0;
        transform: rotateY(180deg);
        top: 0;
        user-select: none;
        z-index: -1;
    }
    
    .login_right_image{
        position: absolute;
        inset-inline-start: 0;
        bottom: 0;
        user-select: none;
        transform: rotateY(180deg);
        height: 20dvh;
        z-index: -1;
    }

    .form_container{
        width: 60%;
        max-width: 1000px;
        background-color: ${props => props.theme.colors.shades.white};
        border-radius: 1.5rem;
        box-shadow: 0 0 10px 0 #CCC;
        padding: 50px;
    }

    .input_group{
        display: flex;
        align-items: flex-end;
        gap:10px;
        margin-bottom: 1.5rem;

        .input_group_icon{
            margin-bottom: .5rem;
            font-size: 1.5rem;
            color: ${props => props.theme.colors.primary.lightBlue};
        }
    }

    @media (max-width:1400px) {
        .form_container{
            width: 60%;
        }
    }

    @media (max-width:1200px) {
        .form_container{
            width: 90%;
            padding: 30px;
        }
    }

    @media (max-width:920px) {
        .form_container{
            width: calc(100% - 20px);
            padding: 30px 20px;
        }

        .login_right_image{
            display: none;
        }
    }
`

export default Style;