import styled from "styled-components";

const Style = styled.div`
    .overlay , .container{
        position: fixed;
        inset: 0;
    }
    
    .overlay{
        z-index: 998;
        background-color: rgba(0,0,0,0.5);
        cursor: pointer;
    }  

    .container{
        z-index: 999;
        pointer-events: none;
        display: flex;
        align-items: center;
        justify-content: center;

        .modal{
            width: 50%;
            max-width: 650px;
            padding: 1rem;
            border-radius: 8px;
            background-color: #fff;
            pointer-events: auto;

            .modal_body{
                width: 100%;
            }

            .head{
                display: flex;
                align-items: center;
                justify-content: flex-end;
                .close_modal_btn{
                    outline: none;
                    border: none;
                    background-color: transparent;
                    cursor: pointer;
                    .close_modal_btn_icon{
                        font-size: 24px;
                        color: #222;
                    }
                }
            }

            @media screen and (max-width:1200px){
                width: 50%;
            }

            @media screen and (max-width:920px){
                width: 60%;
            }

            @media screen and (max-width:720px){
                width: calc(100% - 32px);
                max-width: unset;
            }
        }
    }

`

export default Style;