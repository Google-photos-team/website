import styled from "styled-components";

const Style = styled.div`
    .avatar_block{
        position: relative;
        height: 200px;
        width: 200px;
        margin: 0 auto;
        .avatar_img{
            height: 100%;
            width: 100%;
            object-fit: cover;
            border-radius: 50%;
        }

        .avatar_edit{
            position: absolute;
            bottom: 0;
            inset-inline-end: 0;
            background-color: ${props => props.theme.colors.primary.skyBlue};
            aspect-ratio: 1/1;
            border-radius: 50%;
            outline: none;
            border: none;
            cursor: pointer;
            width: 60px;
            height: 60px;
            display: flex;
            align-items: center;
            justify-content: center;

            transition: 0.3s all ease-in-out;
            &:hover{
                background-color: ${props => props.theme.colors.primary.semiBlack};
            }
            img{
                width: 30px;
            }
        }
    }

    

`

export default Style;