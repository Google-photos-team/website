import styled from "styled-components";

const Style = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 100vh;
    padding: 200px;

    .login_left_image{
        height: 100dvh;
        position: absolute;
        inset-inline-start: 0;
        top: 0;
        user-select: none;
        z-index: -1;
    }
    
    .login_right_image{
        position: absolute;
        inset-inline-end: 0;
        bottom: 0;
        user-select: none;
        height: 20dvh;
        z-index: -1;
    }

    .form_container{
        width: 70%;
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
`

export default Style;